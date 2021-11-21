/* Configs */
import { ENTRY_ELEMENT_ID } from '~ui/configs'

/* Get Entry Element */
function getEntryElement(): Element {
    const appEntryElement = document.querySelector(`#${ENTRY_ELEMENT_ID}`)

    if (!appEntryElement) throw new Error(`Entry element ${ENTRY_ELEMENT_ID} was not found`)

    return appEntryElement
}

export default getEntryElement
