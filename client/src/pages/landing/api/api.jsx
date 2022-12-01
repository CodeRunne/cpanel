import React from 'react';
import { 
    apiMethods, 
    apiServiceOptionList, 
    apiAddOrder, 
    apiOrderOptionList,
    apiMultipleOrderOptionList,
    apiCreateRefillOptionList,
    apiCreateRefillStatusOptionList,
    apiUserBalanceOptionList
} from '../../../constants/api';
import { ApiDescriptionBox, ApiOptionBox, CodeBlock, Footer } from '../../../components';
import { APIContainer, APIDescriptionWrapper, APIDescriptionResponseContainer } from './api.styles';

function Api() {
    const { selectOrderOptions, addOrderOptions } = apiAddOrder;
    return (
        <>
            <APIContainer>
                {/* Api Description Box */}
                <APIDescriptionWrapper className="d-flex d-flex-column">
                    <h2 className="heading-2">API</h2>

                    <APIDescriptionResponseContainer className="d-flex d-flex-column">
                        {apiMethods.map(method => (<ApiDescriptionBox key={method.method} {...method} />))}
                    </APIDescriptionResponseContainer>
                </APIDescriptionWrapper>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Services List" 
                    data={apiServiceOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Add order" 
                    selectData={selectOrderOptions}
                    data={addOrderOptions}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Order status"
                    data={apiOrderOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Multiple Order status"
                    data={apiMultipleOrderOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Create Refill"
                    data={apiCreateRefillOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="Create Refill Status"
                    data={apiCreateRefillStatusOptionList}
                />

                {/* Code Block */}
                <CodeBlock>
                    Code block
                </CodeBlock>

                {/* Api Option Box */}
                <ApiOptionBox 
                    title="User Balance"
                    data={apiUserBalanceOptionList}
                />
            </APIContainer>
        
            {/* Footer */}
            <Footer />
        </>   
    )
}

export default Api;