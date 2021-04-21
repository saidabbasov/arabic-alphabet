import { FC } from 'react'

import { TBlockOrderedList } from '~/views/lesson/types'

const OrderedList: FC<TBlockOrderedList['data']> = ({items}) => {
    return (
        <ol>
            { items }
        </ol>
    )
}

export { OrderedList }
