import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { Modal } from '@/components/Modal'

import { NewSupplierForm } from '@/core/models/forms/NewSupplierForm'

import { useMask } from '@/shared/hooks/useMask'
import { postSupplier } from '@/shared/hooks/services/useSupplierService'

import React, { useEffect, useRef, useState } from 'react'
import { AlertDefault } from '@/shared/widgets/AlertDefault'
import { ErrorMessage } from '@/utils/contants/errorMenssage'
import { SuccessMessage } from '@/utils/contants/successMessage'
import { useUnmask } from '@/shared/hooks/useUnmask'
import { useKey } from '@/shared/hooks/useKey'
import { faEraser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useCompanyInfoService } from '@/shared/hooks/services/useCompanyInfoService'
import { companyInfoResponse } from '@/core/controllers/companyInfoController'
import { ReplaceConstants } from '@/utils/contants/replaceConstants'
import { useDispatch } from 'react-redux'
import { addSupplier } from '@/core/redux/supplier/slice'
import { validateSupplierCreateRequest } from '@/core/models/request/SupplierRequest'

const { maskCNPJ, maskPhone } = useMask()
const { unmaskCNPJ, unmaskPhone } = useUnmask()
const { getCompanyInfoService } = useCompanyInfoService()

type ModalCreateSupplierProps = {
  modalCreateSupplierVisible: boolean
  setModalCreateSupplierVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalCreateSupplier = ({
  modalCreateSupplierVisible,
  setModalCreateSupplierVisible,
}: ModalCreateSupplierProps) => {
  const { handleKeyPress } = useKey()

  const [newSupplier, setNewSupplier] = useState<NewSupplierForm>(
    new NewSupplierForm(),
  )
  const [buttonLoadingSave, setButtonLoadingSave] = useState(false)
  const [buttonLoadingSearchCompanyInfo, setButtonLoadingSearchCompanyInfo] = useState(false)
  const [isOpenErrorAlert, setIsOpenErrorAlert] = useState(false)
  const [isOpenSuccessAlert, setIsOpenSuccessALert] = useState(false)
  const [errorMessage, setErrorMessage] = useState(ErrorMessage.ERROR_CREATE_SUPPLIER)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setNewSupplier(new NewSupplierForm())
    if (modalCreateSupplierVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [modalCreateSupplierVisible])

  useEffect(() => {
    handleKeyPress(handleAddSupplier)
  }, [])

  useEffect(() => {
    const removeListener = handleKeyPress(handleAddSupplier)

    return () => {
      removeListener()
    }
  })

  const handleAddSupplier = async () => {
    if (modalCreateSupplierVisible === false || buttonLoadingSave === true)
      return
    setButtonLoadingSave(true)

    newSupplier.document = unmaskCNPJ(newSupplier.document)
    newSupplier.phone = unmaskPhone(newSupplier.phone)

    const validate = validateSupplierCreateRequest(newSupplier)

    if (validate.length > 0) {
      setErrorMessage(validate.join(''))
      setIsOpenErrorAlert(true)
      setButtonLoadingSave(false)
      return
    }

    const response = await postSupplier(newSupplier)

    setButtonLoadingSave(false)

    if ('message' in response) {
      console.log(response.message)
      setErrorMessage(response.message.replace(ReplaceConstants.VALUE_REQUISITION_INVALID_SUPPLIER, ''))
      setIsOpenErrorAlert(true)
    } else {
      setIsOpenSuccessALert(true)
      setModalCreateSupplierVisible(false)
      dispatch(addSupplier(response.data))
    }
  }

  const handleSeachCompanyInfo = async () => {
    setButtonLoadingSearchCompanyInfo(true)
    const cnpj = unmaskCNPJ(newSupplier.document)
    const response = await getCompanyInfoService(cnpj)

    if (Object.keys(response.data).length === 0) {
      setErrorMessage(ErrorMessage.ERROR_COMPANY_INFO_NOT_FOUND)
      setIsOpenErrorAlert(true)
    } else {
      const data = response.data
      setNewSupplier({
        ...newSupplier,
        tradeName: data.tradeName,
        companyName: data.companyName,
        phone: `${data.ddd}${data.phoneNumber}`,
        email: data.email,
      })
    }

    setButtonLoadingSearchCompanyInfo(false)
  }

  return (
    <>
      <Modal.Root
        title="Novo Fornecedor"
        visible={modalCreateSupplierVisible}
        setVisible={setModalCreateSupplierVisible}
        size="h-auto"
      >
        <Form.Root>
          <Form.Input
            ref={inputRef}
            label={'Documento'}
            inputValue={maskCNPJ(newSupplier.document)}
            setInputValue={(value: string) =>
              setNewSupplier({ ...newSupplier, document: value })
            }
            form="1/3"
            disabled={buttonLoadingSave}
          />
          <Button.Root
            fill="primary"
            size="auto"
            onClick={handleSeachCompanyInfo}
            isLoading={buttonLoadingSearchCompanyInfo}
            disabled={buttonLoadingSearchCompanyInfo}
            >
              <Button.Icon icon={faSearch} />
            </Button.Root>
          <Form.Input
            label={'Nome Fantasia'}
            inputValue={newSupplier.tradeName}
            setInputValue={(value: string) =>
              setNewSupplier({ ...newSupplier, tradeName: value })
            }
            form="2/3"
            disabled
          />
        </Form.Root>
        <Form.Root>
          <Form.Input
            label={'Razão Social'}
            inputValue={newSupplier.companyName}
            setInputValue={(value: string) =>
              setNewSupplier({ ...newSupplier, companyName: value })
            }
            form="full"
            disabled
          />
        </Form.Root>
        <Form.Root>
          <Form.Input
            label={'Telefone'}
            inputValue={maskPhone(newSupplier.phone)}
            setInputValue={(value: string) =>
              setNewSupplier({ ...newSupplier, phone: value })
            }
            form="1/2"
            disabled
          />
          <Form.Input
            label={'Email'}
            inputValue={newSupplier.email}
            setInputValue={(value: string) =>
              setNewSupplier({ ...newSupplier, email: value })
            }
            form="1/2"
            disabled
          />
        </Form.Root>

        <Modal.Footer>
          <Button.Root
            fill="cancel"
            onClick={() => setModalCreateSupplierVisible(false)}
            disabled={buttonLoadingSave || buttonLoadingSearchCompanyInfo}
          >
            <Button.Text text="Cancelar" />
          </Button.Root>
          <Button.Root
            fill="success"
            onClick={handleAddSupplier}
            isLoading={buttonLoadingSave}
            disabled={buttonLoadingSave || buttonLoadingSearchCompanyInfo}
          >
            <Button.Text text="Salvar" />
          </Button.Root>
          <Button.Root
            fill="primary"
            size="auto"
            onClick={() => {
              setNewSupplier(new NewSupplierForm())
            }}
            disabled={buttonLoadingSave || buttonLoadingSearchCompanyInfo}
          >
            <Button.Icon icon={faEraser} />
          </Button.Root>
        </Modal.Footer>
      </Modal.Root>

      {/* Modal de erro */}
      <AlertDefault
        visible={isOpenErrorAlert}
        setVisible={setIsOpenErrorAlert}
        type="error"
        text={errorMessage}
      >
        <Button.Root fill="success" onClick={() => setIsOpenErrorAlert(false)}>
          <Button.Text text="Ok" />
        </Button.Root>
      </AlertDefault>

      {/* Modal de sucesso */}
      <AlertDefault
        visible={isOpenSuccessAlert}
        setVisible={setIsOpenSuccessALert}
        type="success"
        text={SuccessMessage.SUCCESS_CREATE_SUPPLIER}
      >
        <Button.Root
          fill="success"
          onClick={() => setIsOpenSuccessALert(false)}
        >
          <Button.Text text="Ok" />
        </Button.Root>
      </AlertDefault>
    </>
  )
}
