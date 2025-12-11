// src/components/hoversvg.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a simple circular diagram with 4 wedge segments,
 * one for each step in the framework. Hover/click a segment
 * to select that step.
 *
 * This is intentionally dependency-light (no extra libraries).
 */
const HoverSvg = ({ steps, activeStepId, onSelectStep }) => {
  // Center + radius for our little wheel
  const cx = 100;
  const cy = 100;
  const innerR = 30;
  const outerR = 90;

  // Basic polar → cartesian helper
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const rad = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    };
  };

  // Build a donut-segment path from startAngle to endAngle
  const buildWedgePath = (startAngle, endAngle) => {
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
    const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
    const startInner = polarToCartesian(cx, cy, innerR, startAngle);
    const endInner = polarToCartesian(cx, cy, innerR, endAngle);

    return [
      'M', startOuter.x, startOuter.y,
      'A', outerR, outerR, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
      'L', startInner.x, startInner.y,
      'A', innerR, innerR, 0, largeArcFlag, 1, endInner.x, endInner.y,
      'Z',
    ].join(' ');
  };

  const handleSelect = (stepId) => {
    if (typeof onSelectStep === 'function') {
      onSelectStep(stepId);
    }
  };

  const segmentCount = steps.length || 1;
  const anglePerSegment = 360 / segmentCount;

  return (
    <svg
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      role="img"
      aria-label="Something's Up framework diagram"
    >
      {/* Background circle */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR}
        fill="#f5f5f5"
        stroke="#ccc"
        strokeWidth="1"
      />

      {steps.map((step, index) => {
        const startAngle = index * anglePerSegment;
        const endAngle = (index + 1) * anglePerSegment;
        const isActive = step.id === activeStepId;

        // Label position: mid-angle on a label radius
        const midAngle = (startAngle + endAngle) / 2;
        const labelPos = polarToCartesian(cx, cy, (innerR + outerR) / 2, midAngle);

        return (
          <g
            key={step.id}
            onClick={() => handleSelect(step.id)}
            onMouseEnter={() => handleSelect(step.id)}
            style={{ cursor: 'pointer' }}
          >
            <path
              d={buildWedgePath(startAngle, endAngle)}
              fill={isActive ? '#0d6efd' : '#ffffff'}
              stroke="#ccc"
              strokeWidth={isActive ? 2 : 1}
              opacity={isActive ? 1 : 0.9}
            />
            <text
              x={labelPos.x}
              y={labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: 8,
                fill: isActive ? '#ffffff' : '#333333',
                pointerEvents: 'none',
              }}
            >
              {step.shortLabel || step.title}
            </text>
          </g>
        );
      })}

      {/* Center label */}
      <circle cx={cx} cy={cy} r={innerR - 4} fill="#ffffff" stroke="#ccc" strokeWidth="1" />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: 10, fill: '#333333' }}
      >
        Something&apos;s Up
      </text>
    </svg>
  );
};

HoverSvg.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      shortLabel: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  activeStepId: PropTypes.number.isRequired,
  onSelectStep: PropTypes.func.isRequired,
};

export default HoverSvg;
