"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Controller, FormProvider, useFormContext } from "react-hook-form"
import type { ErrorObject } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormField = ({
  ...props
}: {
  name: string
  render: (props: { field: any; fieldState: any; formState: any }) => React.ReactNode
}) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState, formState }) => props.render({ field, fieldState, formState })}
    />
  )
}

const FormItemContext = React.createContext<any>({})

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    )
  },
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentPropsWithoutRef<typeof Label>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = React.useContext(FormItemContext)

    return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />
  },
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { formItemId, formDescriptionId, formMessageId } = React.useContext(FormItemContext)
    const { formState } = useFormContext()
    const error = formState.errors[props.name] as ErrorObject | undefined

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    )
  },
)
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = React.useContext(FormItemContext)

    return (
      <p ref={ref} id={formDescriptionId} className={cn("text-[0.8rem] text-muted-foreground", className)} {...props} />
    )
  },
)
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = React.useContext(FormItemContext)
    const body = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    )
  },
)
FormMessage.displayName = "FormMessage"

export { useFormContext, Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage }
