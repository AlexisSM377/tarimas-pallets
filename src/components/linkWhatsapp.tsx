import { WHATSAPP } from "@/consts/link"
import { ButtonHover } from "./buttonHover"
import { WhatsappIcon } from "./icons/whatsapp";


interface LinkWhatsappProps {
    style: string;
    target?: string;
}
export const LinkWhatsapp = (props: LinkWhatsappProps) => {

    const { style = 'black', target = '_black' } = props;
    return (
        <ButtonHover href={WHATSAPP} style={style} target={target}>
            <span className="text-base font-semibold">¡Contactame!</span>
            <WhatsappIcon className="size-6" />
        </ButtonHover>
    )

}