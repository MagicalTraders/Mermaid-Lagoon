import React from 'react';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';

import Layout, {
  // getCollapseBtn,
  getContent,
  // getDrawerSidebar,
  // getFooter,
  getHeader,
  getInsetContainer,
  // getInsetFooter,
  // getInsetSidebar,
  // getSidebarContent,
  getSidebarTrigger,
  Root,
} from '@mui-treasury/layout';

import {
  // ContentContainer,
  HeaderContainer,
  // NavHeaderContainer,
  // NavContentContainer,
  FooterContainer,
} from '../../mui';

const Header = getHeader(styled);
// const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
// const SidebarContent = getSidebarContent(styled);
// const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const InsetContainer = getInsetContainer(styled);
// const InsetSidebar = getInsetSidebar(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create('appHeader')
    .registerConfig('xs', {
      position: 'sticky',
      initialHeight: 56,
    })
    .registerConfig('md', {
      position: 'relative', // won't stick to top when scroll down
      initialHeight: 64,
    });
});

// scheme.configureEdgeSidebar((builder) => {
//   builder
//     .create("primarySidebar", { anchor: "left" })
//     .registerTemporaryConfig("lg", {
//       collapsible: false,
//       persistentBehavior: "fit",
//       anchor: "left",
//       width: "auto", // 'auto' is only valid for temporary variant
//     })
//   // comment permanentConfig to not show on screen
//   .registerPermanentConfig("xl", {
//     width: 200, // px, (%, rem, em is compatible)
//     collapsible: true,
//     collapsedWidth: 55,
//   });
// });

scheme.configureInsetSidebar((builder) => {
  builder
    .create('secondarySidebar', { anchor: 'right' })
    .registerFixedConfig('lg', {
      width: 300,
    });
});

const Blog = ({ children }) => {
  return (
    <Root scheme={scheme}>
      {({ state: {} }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="primarySidebar" />
              <HeaderContainer />
            </Toolbar>
          </Header>
          {/* <DrawerSidebar sidebarId="primarySidebar">
            <SidebarContent>
              <NavHeaderContainer
                collapsed={sidebar.primarySidebar.collapsed}
              />
              <NavContentContainer />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar> */}
          <Content>
            <InsetContainer
            // rightSidebar={
            //   <InsetSidebar sidebarId="secondarySidebar">
            //     <NavContentContainer />
            //   </InsetSidebar>
            // }
            >
              <main>{children}</main>
            </InsetContainer>
          </Content>

          <FooterContainer />
        </>
      )}
    </Root>
  );
};

export default Blog;
