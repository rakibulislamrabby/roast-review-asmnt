import React from 'react';

const Blog = () => {
    return (
        <div className='container bg-Secondary'>
            <h2 className='text-center mt-2'>Ans The Following Question</h2>
            <h3>What is a context api</h3>
            <p>Ans: In React application, we passed data in a top-down approach via props. Sometimes it is difficult for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.
                Context is used to share data that can be considered "global" for React components tree and use that data where needed, such as the currently authenticated user
                <br />
                React.createContext() is all you need. It returns a consumer and a provider. The provider is a component that as its name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>

            <h3> What is Semantic tag?</h3>
            <p>Ans: Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a "p" tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as "b" and "i" are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup. </p>
            <p><b>Why use semantic elements: </b>
                First, it is much easier to read. This is probably the first thing you will notice when looking at the first block of code using semantic elements. This is a small example, but as a programmer, you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.

                It has greater accessibility. You are not the only one that finds semantic elements easier to understand. Search engines and assistive technologies are also able to better understand the context and content of your website, meaning a better experience for your users.
            </p>

        </div>
    );
};

export default Blog;