import React from 'react';
import S from './style';
import AccountListContainer from './account/AccountListContainer';
import { MenuList } from '../types';

type Props = {
    selectedMenu: string | null;
    menuList: MenuList[];
};

const ContentAreaContainer: React.FunctionComponent<Props> = ({ selectedMenu, menuList }): JSX.Element => {

    return (
        <S.ContentAreaContainer>
            <S.SelectedMenuContentContainer>
                {menuList && menuList.map((menu: MenuList, i: number): JSX.Element | null => (
                    selectedMenu === menu.list ? 
                        <React.Fragment key={i}>{menu.component}</React.Fragment>
                        :
                        null
                ))}

                <S.SelectedMenuHeaderContainer>
                    <S.MenuTitle>계좌 관리</S.MenuTitle>
                    
                    <S.SearchAndSortWrapper>
                        {/* 검색창 */}
                        <S.AccountSearch />
                        <S.AccountSort>정렬 순서</S.AccountSort>
                    </S.SearchAndSortWrapper>
                </S.SelectedMenuHeaderContainer>

                {/* 계좌 목록 */}
                <AccountListContainer />
            </S.SelectedMenuContentContainer>
        </S.ContentAreaContainer>
    );
};

export default ContentAreaContainer;