import { Alert } from '@/components/Alert'
import { ErrorMessage } from '@/utils/contants/errorMenssage'
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type AlertDefaultProps = {
  type: 'success' | 'error' | 'warning' | 'info'
  text: string
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export const AlertDefault = ({
  type,
  text,
  visible,
  setVisible,
  children,
}: AlertDefaultProps) => {
  let title = 'Opa'
  let icon = faCircleCheck

  switch (type) {
    case 'success':
      title = 'Successo!'
      icon = faCircleCheck
      break
    case 'error':
      title = 'Erro!'
      icon = faCircleXmark
      break
    case 'warning':
      title = 'Atenção!'
      icon = faCircleExclamation
      break
    case 'info':
      title = 'Info'
      icon = faCircleInfo
      break
    default:
      title = ''
      icon = faCircleCheck
  }

  return (
    <Alert.Root visible={visible} setVisible={setVisible}>
      <Alert.Icon type={type} iconAlert={icon} />
      <Alert.Title title={title} />
      {type === 'error' ? (
        <Alert.Text text={text} secondText={ErrorMessage.ERROR_CONTACT_SUPORT} />
      ) : (
        <Alert.Text text={text} />
      )}
      <Alert.Actions>{children}</Alert.Actions>
    </Alert.Root>
  )
}
