import React from "react"
import { ResponsibleRegistrationFormProps } from "../../constants"
import { usePostResponsibleRegistration } from "../../hooks"
import { ResponsibleRegistrationTemplate } from "../../components"

export const ResponsibleRegistration = () => {
  const postResponsibleRegistration = usePostResponsibleRegistration()

  const onSumbitRegistration = (payload: ResponsibleRegistrationFormProps) => {
    postResponsibleRegistration.call(payload)
  }

  return (
    <ResponsibleRegistrationTemplate
      onSumbitRegistration={onSumbitRegistration}
    />
  )
}
