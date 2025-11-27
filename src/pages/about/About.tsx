import { FC } from "react";

import { Box, Flex, Heading, Text, Image, Button, IconButton } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Blog } from "pages/about/blog/Blog";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
// import { Skills } from "pages/about/skills/Skills";
import { Achievements } from "pages/about/achievements/Achievements";
import { Publications } from "pages/about/publications/Publications";
import { VolumeIcon } from "utils/Icons";
// Helper component to render the Academicons icon
const ScholarIcon = (props: any) => (
    <Box
        as="i"
        className="ai ai-google-scholar-square" // Academicons class
        fontSize="lg" 
        {...props}
    />
);

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    const onPlay = () => {
        const audio = new Audio(configs.common.audioFile);
        audio.play();
    };

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture}></source>
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG}></source>
                        <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" alt="profile image" filter="brightness(1.05)" />
                    </picture>
                </Box>
                <Box flex="0.85">
                    <Flex alignItems="baseline" mb="2">
                        <Heading data-aos="fade-down" as="span">{configs.common.name}
                        </Heading>

                        <Text
                            as="span" fontSize="xl" fontWeight="bold" opacity="0.8" ml="3" data-aos="fade-down">{configs.common.pronouns}
                        </Text>
                    </Flex>

                    <Flex alignItems="center">
                        <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">{configs.common.pronunciation}
                        </Text>

                        <Button
                            size="xs"
                            aria-label="pronunciation button"
                            as={IconButton}
                            variant="icon"
                            fontSize="md"
                            icon={<VolumeIcon />}
                            onClick={onPlay}
                            data-aos="fade"
                            data-aos-delay="400"
                        />
                    </Flex>
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="lg">{content.about}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink={0} overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex>
            {/* <Box pt="16">
                <Skills />
            </Box> */}
            <Box pt="16">
                <Achievements />
            </Box>
            <Box pt="16">
                <Blog />
            </Box>
        </Box>
    );
};
