import {
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Heading,
    Box,
    Grid,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import InterviewSettingsForm from "./InterviewSettingsForm";
  import JobDetailsForm from "./JobDetailsForm";
  import RequisitionForm from "./RequisitionDetailsForm";
  import DisplayCard from "./PreviewCard";
  import { PageNumbers } from "../../interface/home";
  import {
    IInterViewSettings,
    IJobDetails,
    IRequisitionDetails,
  } from "../../interface/forms";
  
  const CustomTab = ({ children, ...props }) => {
    return (
      <Tab p="1rem" fontFamily="Poppins" {...props}>
        {children}
      </Tab>
    );
  };
  
  const HomeLayout = () => {
    const [page, setPage] = useState(0);
    console.log(page, 'page');
  
    const handlePage = (pageNumber) => {
      setPage(pageNumber);
    };
  
    return (
      <Box w="100%">
        <Container maxW="1200px">
          <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
            Create Candidate Requisition
          </Heading>
          <Tabs index={page} isLazy lazyBehavior="keepMounted">
            <TabList>
              <CustomTab>Requistion Details</CustomTab>
              <CustomTab>Job Details</CustomTab>
              <CustomTab>Interview Settings</CustomTab>
            </TabList>
            <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
              <TabPanels>
                <TabPanel>
                  <RequisitionForm handleTab={handlePage} />
                </TabPanel>
                <TabPanel>
                  <JobDetailsForm handleTab={handlePage} />
                </TabPanel>
                <TabPanel>
                  <InterviewSettingsForm handleTab={handlePage} />
                </TabPanel>
              </TabPanels>
              <DisplayCard />
            </Grid>
          </Tabs>
        </Container>
      </Box>
    );
  };
  
  export default HomeLayout;
  