import { useTranslation } from "react-i18next"

import { ErrorContainer } from "#components/composite/ErrorContainer"
import { ErrorCode, Text } from "#components/composite/ErrorContainer/styled"
import { Label } from "#components/ui/form/Label"

interface Props {
  statusCode?: string
  message?: string
}

function Invalid(props: Props): JSX.Element {
  const { t } = useTranslation()

  const { statusCode = "404", message = t("general.invalid") } = props

  return (
    <ErrorContainer>
      <ErrorCode>{statusCode}</ErrorCode>
      <Text>{message}</Text>
    </ErrorContainer>
  )
}

export default Invalid
