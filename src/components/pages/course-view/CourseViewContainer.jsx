import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { ModuleView } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { coursesActions } from '../../../state/ducks/coursesDuck';
import styled from 'styled-components';

//Component Styles
const CourseCard = styled(Card)`
  margin-bottom: 4%;
`;

const Description = styled.div`
  margin-bottom: 2%;
`;

const CourseViewContainer = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  //Props passed from ProgramView Component
  const { courseName, courseDescription, courseid } = props;

  //Redux State Managers
  const dispatch = useDispatch();

  const course = useSelector(state => state.courses.course);
  const { modules } = course;

  //Dispatch Action to Load Program Info
  useEffect(() => {
    dispatch(coursesActions.getCourseModulesThunk(courseid));
  }, [courseid, dispatch]);

  return (
    <>
      <CourseCard
        title={courseName}
        extra={
          <span onClick={() => setIsExpanded(!isExpanded)}>
            {!isExpanded ? 'more' : 'less'}
          </span>
        }
      >
        {/* If expanded button is clicked, show course information, otherwise collapse card */}
        {isExpanded && (
          <>
            <Description>{courseDescription}</Description>
            {/* Maps over course module data and renders ModuleView components*/}
            {[] &&
              modules?.map(module => (
                <ModuleView
                  key={module.moduleId}
                  moduleName={module.moduleName}
                  moduleDescription={module.moduleDescription}
                  moduleContent={module.moduleContent}
                />
              ))}
          </>
        )}
      </CourseCard>
    </>
  );
};

export default CourseViewContainer;
