import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 md:mt-20'>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <b>Access Token</b>: An access token is a credential that is used to access protected resources, such as APIs or web services. It serves as a proof of authentication and authorization for the client to access specific resources on behalf of the user. Access tokens are usually short-lived and have an expiration time.
                            <br />
                            <br />
                            <b>Refresh Token</b>: A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is typically issued alongside an access token during the initial authentication process. The refresh token is securely stored and should only be used by the client to request a new access token when needed.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Compare SQL and NoSQL databases?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is express js? what is nest js
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        <b>Express js:</b>
                        Express.js is a popular web application framework for Node.js, a runtime environment for executing JavaScript code outside of a web browser. Express.js provides a robust set of features and tools to build web applications and APIs quickly and easily.
                        <br />
                        <br />
                        <b>Nest js: </b>
                        NestJS is a progressive framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular, sharing a similar module-based architecture, decorators, and dependency injection system. NestJS is designed to provide a structured approach to building server-side applications, promoting code reusability and testability.
                        </p>
                        
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is MongoDB aggregate and how does it work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;