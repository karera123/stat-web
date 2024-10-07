import H1A1 from "../components/answers/hw1/H1A1"
import H1A2 from "../components/answers/hw1/H1A2"
import H1A3 from "../components/answers/hw1/H1A3"
import Question from "../components/Question"

const Hw1 = () => {

  const questions = [
    'Basic notions in Statistics: Population, Statistical Units, Distribution',
    'Notion of average. Computational problems with floating point rapresentation (errors, catastrophical cancellation) and numerical solution (Knuth)',
    'We have n servers with m attackers. ' +
    'The hacker has probability p to penetrate each server. ' +
    'Make a graphical representation (line flat if hacker doesn\'t penetrate and a jump to 1 if he penetrates), try different n,m,p. ' +
    'At time n we want to count how many reached each level.'
  ]

  return (
    <div className="py-5">
      <div id="question1">
        <Question text={questions[0]} />
        <H1A1 />
      </div>
      <div id="question2" className="mt-8 border-t-2 pt-4">
        <Question text={questions[1]} />
        <H1A2 />
      </div>
      <div id="question3" className="mt-8 border-t-2 pt-4">
        <Question text={questions[2]} />
        <H1A3 />
      </div>
    </div>
  )
}

export default Hw1