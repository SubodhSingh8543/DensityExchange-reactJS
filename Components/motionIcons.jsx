import { Box, border, Image, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ResizableDiv from './changingmobiledivsize';

const RotatingBoxes = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <Flex className="rotating-container" ref={containerRef}>
            <Box w={"50%"}>

            </Box>

            <Box>
                <Box padding={"3%"} borderRadius={"50%"} h={"400px"} w={"400px"} border={"5px dashed white"} className={`rotating-box red ${isVisible ? 'active' : ''}`}>
                    <Box w={"20%"} ml={"-20px"} ><Image w={"100%"} h={"10%"} src='/images/emogi1.png' alt='error' /></Box>
                    <Box mt={"30%"} w={"20%"} h={"20%"} ml={"100%"} ><Image w={"100%"} h={"100%"} src='/images/emogi2.png' alt='error' /></Box>
                    <Box mt={"20%"} w={"20%"} ml={"10%"}  ><Image w={"100%"} h={"10%"} src='/images/emogi3.png' alt='error' /></Box>
                </Box>

                <ResizableDiv/>
            </Box>




            {/* <Box className={`rotating-box green ${isVisible ? 'active' : ''}`}></Box>
      <Box className={`rotating-box blue ${isVisible ? 'active' : ''}`}></Box> */}
        </Flex>
    );
};

export default RotatingBoxes;
