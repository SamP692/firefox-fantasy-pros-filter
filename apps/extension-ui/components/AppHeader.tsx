/* Libraries */
import { h } from 'preact'

import type { ComponentChildren } from 'preact'

/* App Header Props */
interface AppHeaderProps {
    children: string
}

/* App Header */
function AppHeader({ children }: AppHeaderProps) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}

export default AppHeader
