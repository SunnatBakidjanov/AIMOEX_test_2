import classNames from 'classnames';
import React from 'react';
import styles from './index.module.css';
import { FaGear } from 'react-icons/fa6';
import { useDisabled } from '../../../hooks/useDisabled';
import { roundToolbarStyles } from './scripts/roundToolbarStyles';

export const RoundToolbar = ({ children, initialDegree, openDegree, radius, openRadius, angleStep, className = {}, isOpen, toggleToolbar, toolbarRef }) => {
    const tools = React.Children.toArray(children);
    const { isDisabled, setDisabled } = useDisabled();
    const { toolsClassname, toolsImgClassname } = roundToolbarStyles();

    return (
        <div ref={toolbarRef} className={classNames('fixed flex items-center justify-center', className.toolbar)}>
            {tools.map((tool, idx) => {
                const angle = initialDegree + idx * angleStep;
                const openAngle = openDegree + idx * angleStep;

                return (
                    <div
                        key={idx}
                        className={classNames(styles.trigger, isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')}
                        style={{
                            '--angle': `${isOpen ? angle : openAngle}deg`,
                            '--radius': `${isOpen ? radius : openRadius}px`,
                        }}
                    >
                        {tool}
                    </div>
                );
            })}

            <button
                className={classNames(isOpen ? '' : styles.waveAnimation, toolsClassname)}
                onClick={() => {
                    toggleToolbar();
                    setDisabled();
                }}
                disabled={isDisabled}
            >
                <FaGear className={classNames(toolsImgClassname, isOpen ? 'rotate-0' : 'rotate-180')} />
            </button>
        </div>
    );
};
