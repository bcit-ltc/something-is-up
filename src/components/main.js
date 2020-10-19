import React, { Component } from 'react';
import { Button, Modal, Accordion, Card } from 'react-bootstrap';
import Contain from "react-contain";
import AudioPlayer from 'react-h5-audio-player';

import HoverSvg from "./hoversvg.js";
import { ImageAssets, AudioAssets, UtilityFunctions as UF } from "./utility.js";

class Main extends Component {

  constructor(props){
    super(props);

    this.audio = {
      case1 : AudioAssets["The-Team-Presentation.mp4"],
    }

    // TODO: don't brute force
    this.hoverSvgsRefs =  [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef()
    ]

    this.hoverSvgs = [
      <HoverSvg 
        key="noticeSomethingsUp"
        ref={this.hoverSvgsRefs[0]}
        name="noticeSomethingsUp"
        isEnabled={true}
        svgType={HoverSvg.SvgTypes.CIRCLE}
        cx="490" cy="170" r="150" 
        clickEvent={this.svgClickEvent}
      />,
      <HoverSvg 
        key="suspendJudgement"
        name="suspendJudgement"
        ref={this.hoverSvgsRefs[1]}
        isEnabled={true}
        svgType={HoverSvg.SvgTypes.CIRCLE}
        cx="812" cy="493" r="150" 
        clickEvent={this.svgClickEvent}
      />,
      <HoverSvg 
        key="makeSense"
        name="makeSense"
        ref={this.hoverSvgsRefs[2]}
        isEnabled={true}
        svgType={HoverSvg.SvgTypes.CIRCLE}
        cx="490" cy="815" r="150" 
        clickEvent={this.svgClickEvent}
      />,
      <HoverSvg 
        key="informedAction"
        name="informedAction"
        ref={this.hoverSvgsRefs[3]}
        isEnabled={false}
        svgType={HoverSvg.SvgTypes.CIRCLE}
        cx="166" cy="493" r="150" 
        clickEvent={this.svgClickEvent}
      />,
    ];

    

    this.modalContents = {
      noticeSomethingsUp: <div className="step-content">
      <p><strong>Step 1: Something&rsquo;s Up</strong></p>
      <ul>
      <li>We become aware that &ldquo;Something&rsquo;s up&rdquo; when we are in a situation with a person, system or group when we experience a surprising difference from what we expected.</li>
      <li>We may feel confused, nervous, angry, or irritated.</li>
      <li>We may want to avoid further contact or interaction with the person or group.</li>
      </ul>
      <p><strong><em>Analysis for the incident: Something&rsquo;s Up</em></strong></p>
      <Button onClick={() => this.setState({ isCaseModalOpen: true})}>Case 1 - The Team Presentation Meeting</Button>
      <br/>
      <p>Reflecting back to the interaction between the instructor and student planning their Friday meeting, what happened that triggered this &ldquo;Something&rsquo;s Up&rdquo; experience? Let's look at possible perspectives from both of them:</p>
      <ul>
      <li>Instructor perspective:
      <ul>
      <li>The importance and purpose of the meeting was clear but my student still didn&rsquo;t show up</li>
      <li>A date/time was agreed upon so this shouldn&rsquo;t be an issue and my student show up or let us know they wouldn&rsquo;t be coming.</li>
      <li>The student didn&rsquo;t show up for the time we agreed and this is really surprising</li>
      </ul>
      </li>
      <li>Student perspective:
      <ul>
      <li>The instructor wanted to meet at 3:00 on Thursday but my teacher seemed really understanding about my situation with my family and father.</li>
      <li>The instructor was understanding when I told him about my father&rsquo;s death anniversary but my group is inflexible about my family responsibility.</li>
      <li>The instructor is surprised I was not at the meeting but they said I <em>don&rsquo;t have to</em> attend the meeting.</li>
      </ul>
      </li>
      </ul>
  </div>,

suspendJudgement: <div className="step-content">
        <p><strong>Step 2: Suspend Judgment</strong></p>
        <ul>
        <li>Immediately following the Something&rsquo;s Up, we often will move to a position of prematurely judging or coming to conclusions about the character or intentions of the person, system or group we are interacting with.</li>
        <li>If we are too quickly set in this judgment it can become a barrier to a deeper and more accurate understanding and resolution to the situation. Essentially, we jump to conclusions.</li>
        <li>If we can suspend judgement early and are aware of our judgment, we can acknowledge it and also set it aside and allow ourselves to be curious about the situation, our reaction, and what may be underneath, culturally, that may have caused the issue.</li>
        <li>If we can suspend judgment, we can practice looking deeper into the issue and be curious as to possible hidden foundations below the surface. This prepares us to &ldquo;make sense&rdquo; of the incident.</li>
        </ul>
        <p><strong><em>Analysis for the incident: Suspend Judgment</em></strong></p>
        <Button onClick={() => this.setState({ isCaseModalOpen: true})}>Case 1 - The Team Presentation Meeting</Button>
        <br/>
        <p>We know that it is important to identify and avoid premature judgement before having a clear understanding of an incident. Reflecting back to the interaction between the instructor and student planning their Friday meeting, what possible judgments may have arisen for both of them?&nbsp;</p>
        <ul>
        <li>Instructor:
        <ul>
        <li>This student seems to be lacking English skills.</li>
        <li>This student&rsquo;s not responsible about their studies and letting classmates down.</li>
        <li>The student misled me and classmates by not being upfront about their intention.</li>
        </ul>
        </li>
        <li>Student:
        <ul>
        <li>The instructor is being unreasonable to expect me to attend given the anniversary.</li>
        <li>The instructor is insensitive and inflexible about the importance of family and tradition</li>
        <li>The instructor misled me that it was okay to not attend the meeting</li>
        </ul>
        </li>
        </ul>
        <p></p>
      </div>,

      makeSense: <div className="step-content">
        <p><strong>Step 3: Make Sense</strong></p>
        <ul>
        <li>At this stage, we apply some of the interpersonal and intercultural learning models to analyze and understand the hidden dynamics that may be influencing the misunderstanding or problem. When we have different cultural values orientations, we use these to better &ldquo;make sense&rdquo; of what the underlying differences&nbsp; may be causing the gaps. We can use this understanding of the gaps to reorient ourselves so that we can potentially bridge or adjust ourselves to the situation.</li>
        </ul>
        <br/>
        <p><em>A key set of questions that can help gain perspective include:</em></p>
        <ul>
        <li style={{listStyleType: "none"}} >
        <ul>
        <li>What would my expectation of &ldquo;normal&rdquo; behaviours by my cultural upbringing for this situation be?</li>
        <li>What would the other person, group, or system&rsquo;s normal be?</li>
        <li>Are there any key <strong>Culture-General Values Frameworks</strong> I could use to understand this gap/our expectations or behaviors?</li>
        </ul>
        </li>
        <li>If I can identify the gap, what can I do to bridge it or to reframe my understanding and actions?</li>
        </ul>
        <br/>
        <p><strong><em>Analysis for the incident: Make Sense step</em></strong></p>
        <Button onClick={() => this.setState({ isCaseModalOpen: true})}>Case 1 - The Team Presentation Meeting</Button>
        <br/>
        <p>Intercultural tools exist that can help us better understand the underlying values that drive our behaviors and expectations. We will use three of these Culture-General Values Orientations to analyze common situations that may arise in a classroom and begin to consider alternative ways to understand and respond to international student incidents.</p>
        <p>Let&rsquo;s begin with a brief explanation of theses dynamics and how we can apply them in understanding the interaction that took place in our dialogue above.</p>
      </div>,

      informedAction: <div className="step-content">

      </div>,

      noticeSomethingsUp2: <div className="step-content">
      <Button onClick={() => this.setState({ isFrameworksModalOpen: true})}>Three Culture-General Values Frameworks</Button>
      <br/>
      <p><strong>Step 1: Something&rsquo;s Up!</strong></p>
      <p>Reflecting back on this interaction, what happened that triggered this &ldquo;Something&rsquo;s Up&rdquo; experience?</p>
      <ul>
      <li>Instructor:
      <ul>
      <li>Students are approaching me to solve a group issue and the international students don&rsquo;t seem to understand its importance.</li>
      <li>The international students don&rsquo;t seem to be fully owning this.</li>
      <li>I&rsquo;m not confident these students will do as we discussed.</li>
      </ul>
      </li>
      <li>Students:
      <ul>
      <li>Our teammates have gone to the instructor. This is embarrassing and makes us look bad. This could make a problem for us.</li>
      <li>The instructor is unhappy with this and we need to respond positively.</li>
      </ul>
      </li>
      </ul>
      </div>,

      suspendJudgement2: <div className="step-content">
      <Button onClick={() => this.setState({ isFrameworksModalOpen: true})}>Three Culture-General Values Frameworks</Button>
      <br/>
        <p><strong>Step 2: Suspend Judgement</strong></p>
        <p>Reflecting back to this interaction between the instructor and student planning their Friday meeting, what judgments arose?</p>
        <ul>
        <li>Instructor:
        <ul>
        <li>I really prefer the student teams work these things out and am tired of having to deal with this kind of thing..</li>
        <li>I am not sure the international students are taking this seriously enough</li>
        <li>This is a professional school and my job as their teacher shouldn&rsquo;t be to hold hands and solve this kind of issue when students are not responsible.</li>
        </ul>
        </li>
        <li>Student:
        <ul>
        <li>The other students should never do this!</li>
        <li>The instructor is angry. I don&rsquo;t want the instructor angry at me/us</li>
        </ul>
        </li>
        </ul>
      </div>,

      makeSense2: <div className="step-content">
      <Button onClick={() => this.setState({ isFrameworksModalOpen: true})}>Three Culture-General Values Frameworks</Button>
      <br/>
        <p><strong>Step 3: Make Sense</strong></p>
        <p>What would the cultural norms of those interacting be based on the Culture-General Values Frameworks presented earlier?</p>
        <ul>
        <li>Instructor:
        <ul>
        <li>Task oriented- The international students need to focus on their work and responsibilities. They are letting their team down</li>
        <li>Egalitarian- The instructor should not have to enforce this kind of group work behavior. As adults in our professional program it is not my job to direct students in projects.</li>
        </ul>
        </li>
        <li>Student:
        <ul>
        <li>Hierarchical- As students we must show our teacher that we regret having to involve them. We must listen and respond positively to the instructor.</li>
        <li>Hierarchical- We are surprised that our fellow classmates would go to our instructor about this. This is our matter and we should not involve someone of higher status like this in our issue. This is a student issue.</li>
        <li>Indirect- we should show that we agree with our instructor. We know it is important to not raise problems, issues or disagreements about this to our instructor.</li>
        </ul>
        </li>
        </ul>
      </div>,

      informedAction2: <div className="step-content">
      <Button onClick={() => this.setState({ isFrameworksModalOpen: true})}>Three Culture-General Values Frameworks</Button>
      <br/>
        <p><strong>Step 4: Informed Action</strong></p>
        <p>What could we take forward as a learning for future interactions?</p>
        <ul>
        <li>Instructor:
        <ul>
        <li>I need to discuss this dimension of teamwork earlier in the class to set up clear expectations in the teams.</li>
        <li>I need build in more peer evaluation in groups</li>
        <li>I need to pre-teach team strategies for dealing with these kinds of issues</li>
        <li>I need to coach these students in conflict resolution how to approach their classmates.</li>
        </ul>
        </li>
        <li>Student:
        <ul>
        <li>We need to contribute in our teams as we discuss and agree or the instructor may be involved.</li>
        <li>There is more peer accountability in Canadian schools because we have these projects and not only one big final exam like back home. Teamwork means we all need to contribute and be reliable.</li>
        </ul>
        </li>
        </ul>
      </div>,

      part2: <div className="step-content">
        <p>here would be a segue chapter to explain the three culture-general values frameworks, maybe the same quiz from the topic</p>
        <p>Now that you've read that, here's the updated something's up to consider this new case: </p>
        <p>This would also be the case 2 text</p>
        <p>Explore the steps again</p>
      </div>,

    };

    this.state = {
      isMainModalOpen: false,
      isCaseModalOpen: false,
      isFrameworksModalOpen: false,
      currentModalContent: null,
      part2Enabled: false,
    }
  }  

  svgClickEvent = svgName => {
    if(!this.state.part2Enabled){
      this.setState({ currentModalContent: this.modalContents[svgName] });
      this.openModal();
    }else{
      this.setState({ currentModalContent: this.modalContents[svgName + "2"] });
      this.openModal();
    }
  }

  checkProgress = () => {
    if(!this.state.part2Enabled){
      const hasClickedAll = this.hoverSvgsRefs.every(ref => 
        !ref.current.state.isEnabled || (ref.current.state.isEnabled && ref.current.state.isCurrentStep)
      );
      if(hasClickedAll){
        this.setState({
          currentModalContent: this.modalContents.part2,
          isMainModalOpen: true,
          part2Enabled: true
        });
        this.setupPart2();
      }
    }
  }

  setupPart2() {
    this.hoverSvgsRefs.forEach(ref => {
      ref.current.setState({
        isEnabled: true,
        isCurrentStep: false
      });
    });
  }

  closeModal = () => {
    this.setState({ isMainModalOpen: false});
  }

  openModal = () => {
    this.setState({ isMainModalOpen: true });
  }



  render() {
    return <div className="main">
      <Modal // main modal
          dialogClassName="main-modal"
          show={this.state.isMainModalOpen}
          onHide={() => this.closeModal() }
          onExited={() => this.checkProgress() }
        aria-labelledby="main-modal"
        centered
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
          {this.state.currentModalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{ this.setState({isMainModalOpen: false})}}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal // case reminder
          dialogClassName="main-modal"
          show={this.state.isCaseModalOpen}
          onHide={()=>{ this.setState({isCaseModalOpen: false})}}
        aria-labelledby="case-modal"
        centered
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <div class="step-content">
          <AudioPlayer
            volume={0.5}
            src="https://learn.bcit.ca/content/enforced/655830-InterculturalCommunication(manual)/modules/02/assets/The-Team-Presentation.m4a"
          />
          <br/>
          <p><strong>The Team Presentation meeting</strong></p>
          <p>It is Tuesday afternoon and an instructor is speaking with a student and discussing the coordination of a team meeting.</p>
          <table class="table table-bordered">
          <tbody class="left">
          <tr>
          <th class="table-primary">Instructor</th>
          <td>Hi! So glad to see you here today. I&rsquo;ve been speaking with the the Team and they are excited about the meeting to go over the presentation. Your Team said you have many things to discuss and we really need to get a timetable set so that there is time to create your presentation and practice it. It&rsquo;s a very busy time of year!</td>
          </tr>
          <tr>
          <th class="table-primary">Student</th>
          <td>Yes, that&rsquo;s true.</td>
          </tr>
          <tr>
          <th class="table-primary">Instructor</th>
          <td>So we should set a meeting to bring you and your team together. I will schedule the meeting for this Friday at 3:00pm.</td>
          </tr>
          <tr>
          <th class="table-primary">Student</th>
          <td>Yes. Friday is a really important day, did you know? It&rsquo;s the anniversary of my father&rsquo;s passing.</td>
          </tr>
          <tr>
          <th class="table-primary">Instructor</th>
          <td>Oh, I&rsquo;m sorry to hear that. I hope you and your family can find peace and remember your father warmly.</td>
          </tr>
          <tr>
          <th class="table-primary">Student</th>
          <td>Thank you. I appreciate your understanding.</td>
          </tr>
          </tbody>
          </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{ this.setState({isCaseModalOpen: false})}}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal // framework reminder
          dialogClassName="main-modal"
          show={this.state.isFrameworksModalOpen}
          onHide={()=>{ this.setState({isFrameworksModalOpen: false})}}
        aria-labelledby="frameworks-modal"
        centered
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <div class="step-content">
        <h1>Three Culture-General Values Frameworks</h1>
          <p><strong>Orientations to Hierarchy</strong> Adapted from Geert Hofsted&rsquo;s <a href="https://www.hofstede-insights.com/product/compare-countries/" target="_blank" rel="noopener noreferrer" >work</a></p>
        <Accordion style={{display: "block"}}>
          <Card>
            <Card.Header style={{display: "block"}}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Egalitarian
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                <li>Believe People are essentially equal</li>
                <li>Superiors and subordinates are and can act independently</li>
                <li>People achieve success and status through their own effort and abilities</li>
                <li>Power should be shared and authority decentralized</li>
                <li>Elderly not highly respected but youth valued</li>
                <li>Independence valued more than obedience</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{display: "block"}}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                Hiearchical
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                <li>Accept that hierarchy is natural and all people are not equal</li>
                <li>Subordinates dependent on superiors</li>
                <li>It is normal that some people from higher status or well positioned families and backgrounds should benefit and continue their status.</li>
                <li>Those in higher positions control power and decisions and so it is centralized</li>
                <li>Elderly and high-status people respected and valued</li>
                <li>Obedience and following direction valued</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br/>
          <p><strong>Orientation to Task Approach</strong></p>
          <br/>
          <Accordion style={{display: "block"}}>
          <Card>
            <Card.Header style={{display: "block"}}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Task
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                <li>Get down to work right away</li>
                <li>Focus on the work that needs to be completed and get it done</li>
                <li>Tasks shared by proportion or skill</li>
                <li>Build rapport and trust through the work</li>
                <li>Demonstrate and learn a colleague or classmate&rsquo;s character through your work</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{display: "block"}}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                Relationship
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                <li>Take time to get to know each other before commencing the work</li>
                <li>Ensure all are comfortable with what has been divided and how it was divided</li>
                <li>Work goes smoothly once we know each other better</li>
                <li>Need to know the character of colleagues or classmates to know how we can best work together</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br/>
          <p><strong>Orientation to Face-to-Face Communication</strong></p>
          <br/>
          <Accordion style={{display: "block"}}>
          <Card>
            <Card.Header style={{display: "block"}}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Direct
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                <li>Focus is on completing task</li>
                <li>Explicit use of words without hidden meaning</li>
                <li>Like to get to the point quickly and efficiently</li>
                <li>Importance to &ldquo;not take things too personally&rdquo;</li>
                <li>Address conflict directly and face to face between involved individuals</li>
                <li>Importance of being authentic and open with emotion if needed to share</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{display: "block"}}>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                Indirect
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                <li>Focus is on maintaining harmony and stable relationships</li>
                <li>More use of non-verbal and implicit messages</li>
                <li>May take time to uncover important points or messages</li>
                <li>Sensitive to the use of words as they can be taken very personally and impact relationships</li>
                <li>Handle conflict indirectly using third party to bridge understanding</li>
                <li>Importance of showing restraint and not allowing strong or negative emotions out</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{ this.setState({isFrameworksModalOpen: false})}}>Close</Button>
        </Modal.Footer>
      </Modal>
      <div className="main-stage-wrapper">
          <div className="main-stage-center">
          <Contain className="main-stage-contain" ratio={1} >
            <div className="main-stage">
                <img className="main-stage-graphic" src={ImageAssets["something-is-up-graphic.png"]} alt="" />
                <div className="svg-overlay">
                    <svg viewBox="0 0 981 983" width="100%" height="100%">
                      {this.hoverSvgs}
                    Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
            </div>
        </Contain>
        </div>
      </div>
    </div>
  }
}

export default Main;