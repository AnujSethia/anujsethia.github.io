import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
    const link = document.createElement("a");
    link.href = configs.common.resume;
    link.download = "Resume_AnujSethia.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};
