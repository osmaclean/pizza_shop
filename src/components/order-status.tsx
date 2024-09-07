export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span
          data-testid="badge"
          className={`${
            status === 'pending'
              ? 'bg-slate-400'
              : status === 'canceled'
                ? 'bg-rose-500'
                : status === 'delivered'
                  ? 'bg-emerald-500'
                  : ['processing', 'delivering'].includes(status)
                    ? 'bg-amber-500'
                    : ''
          } h-2 w-2 rounded-full`}
        />
        <span className="font-medium text-muted-foreground">
          {orderStatusMap[status]}
        </span>
      </div>
    </>
  )
}
