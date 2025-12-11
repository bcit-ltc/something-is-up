// src/components/main.js
import React, { useState } from 'react';
import '../App.css';
import HoverSvg from './hoversvg';
import { steps } from './utility';

const Main = () => {
  const [activeStepId, setActiveStepId] = useState(steps[0].id);
  const activeStep = steps.find((s) => s.id === activeStepId);

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="h3">Something&apos;s Up</h1>
        <p className="text-muted mb-1">
          An interaction to help you explore the “Something&apos;s Up” framework.
        </p>
        <p className="text-muted">
          Hover or click on the diagram, or select a step in the list to learn more.
        </p>
      </header>

      <div className="row">
        {/* Left: list of steps */}
        <div className="col-md-4 mb-3">
          <ul className="list-group">
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                className={
                  'list-group-item list-group-item-action' +
                  (step.id === activeStepId ? ' active' : '')
                }
                onClick={() => setActiveStepId(step.id)}
              >
                <div className="fw-bold">{step.title}</div>
                <small>{step.summary}</small>
              </button>
            ))}
          </ul>
        </div>

        {/* Right: diagram + active step details */}
        <div className="col-md-8">
          <div className="row">
            {/* Diagram */}
            <div className="col-lg-5 mb-3">
              <div
                className="border rounded p-2 d-flex align-items-center justify-content-center"
                style={{ minHeight: 220 }}
              >
                <HoverSvg
                  steps={steps}
                  activeStepId={activeStepId}
                  onSelectStep={setActiveStepId}
                />
              </div>
            </div>

            {/* Details */}
            <div className="col-lg-7">
              {activeStep && (
                <div>
                  <h2 className="h4 mb-3">{activeStep.title}</h2>
                  <p>{activeStep.description}</p>
                  {activeStep.points && (
                    <ul>
                      {activeStep.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
