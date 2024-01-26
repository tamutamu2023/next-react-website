import { parseISO, format } from 'date-fns'
import ja from 'date-fns/local/ja'

export default function ConvertDate({ dateISO }) {
    return (
        <time dataTime={dateISO}>
            {format(parseISO(dateISO), '2024年1月26日', {
                locale: ja,
            })}
        </time>
    )
}