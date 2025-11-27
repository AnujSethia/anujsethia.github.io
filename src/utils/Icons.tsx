import { Box } from "@chakra-ui/react";
export { BiLink as LinkIcon } from "react-icons/bi";
// export { FaGoogleScholar as ScholarIcon } from "react-icons/fa6";
export {
    FaLinkedin as LinkedInIcon,
    FaGithub as GitHubIcon,
    FaFacebookSquare as FacebookIcon,
    FaInstagramSquare as InstagramIcon,
    FaYoutubeSquare as YoutubeIcon,
    FaVolumeUp as VolumeIcon,
    FaHamburger as MenuIcon,
} from "react-icons/fa";
export { FiChevronDown as ChevronDownIcon, FiChevronUp as ChevronUpIcon } from "react-icons/fi";
export { HiArrowSmRight as ArrowRightIcon, HiMail as MailIcon } from "react-icons/hi";
export { IoMoon as MoonIcon, IoSunny as SunIcon } from "react-icons/io5";
export const ScholarIcon = (props: any) => (
    <Box
        as="i"
        className="ai ai-google-scholar-square" // Academicons class
        lineHeight="1" // Helps align it with other icons
        {...props}
    />
);