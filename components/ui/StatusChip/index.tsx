import type { OrderStatus } from "./OrderStatusChip"
import type { ReturnStatus } from "./ReturnStatusChip"
import type { ShipmentStatus } from "./ShipmentStatusChip"
import { StatusChipWrapper } from "./styled"

type Props = {
  status?: OrderStatus | ReturnStatus | ShipmentStatus
  label: string
}

const StatusChip: React.FC<Props> = ({ status, label }) => {
  if (status === undefined) return null
  return <StatusChipWrapper status={status}>{label}</StatusChipWrapper>
}

export default StatusChip
