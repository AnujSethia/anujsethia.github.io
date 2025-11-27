import { FC } from "react";

import { Box, Link } from "@chakra-ui/react";

import { ArticleTitle } from "pages/about/common/title/Title";
import { configs } from "shared/content/Content";

export const Publications: FC = () => {
    return (
        <>
            <ArticleTitle title="Publications" />
            <br />
            {configs.about.publications.map((item) => (
                <Box py="2" key={item.id}>
                    <Link href={item.link} target="_blank" variant="link">
                        {item.title}
                    </Link>
                </Box>
            ))}
        </>
    );
};
