import React from 'react';
import { NavigationLinkItem } from './navigation-link.styles';

function NavigationLink({ name, url }) {
    return (
        <li>
            <NavigationLinkItem to={`${url}`} end>{name}</NavigationLinkItem>
        </li>
    )
}

export default NavigationLink;