import React from "react";
import * as All from "../lib/buttonFunctions"
import {Button, Icon, Link, Collapse, Box, Stack} from "@chakra-ui/core"
import Markdown from "./Markdown"

const AcertButton = ({button, text, markdown, ...props}) => {
    if (button.type === "Link") {
        return (
            <Link href={button.href} aria-label={button.href}>
                <Button 
                rounded="lg"
                variantColor="primary" 
                fontWeight="bold" 
                fontSize="22px"
                {...props}
                px="4"
                py="2"
                >
                    {props.iconLeft ? <Icon name={props.iconName} mr="2"/> : void 0}
                    {text}
                    {props.iconRight ? <Icon name={props.iconName} ml="2"/> : void 0}
                </Button>
            </Link>
        )
    } else if (button.type === "Markdown") {
        const content = markdown["index" + button.id]
        const [show, setShow] = React.useState(false);
        const handleToggle = () => setShow(!show);
        return (
            <Stack align="center">
                <Button 
                    rounded="lg"
                    variantColor="primary" 
                    fontWeight="bold" 
                    fontSize="22px"
                    {...props}
                    onClick={handleToggle}
                    px="4"
                    py="2"
                    >
                        {props.iconLeft ? <Icon name={props.iconName} mr="2"/> : void 0}
                        {text}
                        {props.iconRight ? <Icon name={props.iconName} ml="2"/> : void 0}
                </Button>
                <Collapse mt={4} isOpen={show}>
                    <Markdown content={content}/>
                </Collapse>
            </Stack>
        )
    }
    else if (button.type === "Action") {
        //Add arguments
        return (
        <Button 
        rounded="lg"
        variantColor="primary" 
        fontWeight="bold" 
        fontSize="22px"
        {...props}
        onClick={() => All[button.function](JSON.parse(button.Arguments))}
        px="4"
        py="2"
        >
            {props.iconLeft ? <Icon name={props.iconName} mr="2"/> : void 0}
            {text}
            {props.iconRight ? <Icon name={props.iconName} ml="2"/> : void 0}
        </Button>
        )
    } else {
        return (
            <Button 
            rounded="lg"
            variantColor="primary" 
            fontWeight="bold" 
            fontSize="22px"
            {...props}
            px="4"
            py="2"
            >
                {props.iconLeft ? <Icon name={props.iconName} mr="2"/> : void 0}
                {text}
                {props.iconRight ? <Icon name={props.iconName} ml="2"/> : void 0}
            </Button>
        )
    }
}

export default AcertButton