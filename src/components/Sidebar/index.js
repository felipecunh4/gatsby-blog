import React from 'react';
import Profile from '../Profile';

import * as S from './styled';

const Sidebar = () => {
    return (
        <S.SidebarWrapper>
            <Profile />
        </S.SidebarWrapper>
    )
}

export default Sidebar;