import { FC } from "react";

import { Box, Text, UnorderedList } from "@chakra-ui/react";
import { SectionTitle } from "pages/about/common/title/Title";

interface Props {
    expanded: number[];
    idx: number;
    onChange: (expanded: any) => void;
    title: string;
    subTitle: string;
    date: string;
    content: string[];
    id: string;
}

export const Expandable: FC<Props> = ({ id, title, subTitle, date, content }) => {
    return (
        <Box id={id}>
            <SectionTitle title={title} fontWeight="semibold" />
            <Text data-aos="fade">{subTitle}</Text>
            <Text color="gray" data-aos="fade-up" fontSize="sm" fontWeight="semibold">
                {date}
            </Text>
            {content.length > 0 && (
                <Box pt="2" data-aos="fade">
                    <Text>{content[0]}</Text>
                    {content.length > 1 && (
                        <UnorderedList listStylePosition="outside" pl="1">
                            {content.slice(1).map((cont, i) => (
                                <Text as="li" key={`${title}-cont-${i}`}>
                                    {cont}
                                </Text>
                            ))}
                        </UnorderedList>
                    )}
                </Box>
            )}
        </Box>
    );
};
