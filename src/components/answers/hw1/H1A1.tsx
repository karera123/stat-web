const H1A1 = () => {
  return (
    <div className="pl-6">
      <section>
        <ul className="list-disc">
          <li>
            <h2 className="text-base font-semibold">Population</h2>
          </li>
        </ul>
        In statistics, a population refers to the entire group of individuals, objects, or events that we are interested in studying. It is the complete set of all elements that share a common characteristic.
        <br />
        Examples:
        <br />
        <div className="pl-10">
          <ul className="list-disc">
            <li>
              All registered voters in a country
            </li>
            <li>
              All students enrolled in a university
            </li>
            <li>
              All cars produced by a specific manufacturer in a given year
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <ul className="list-disc">
          <li>
            <h2 className="text-base font-semibold">Statistical Units</h2>
          </li>
        </ul>
        Statistical units are the individual elements that make up a population. They are the basic units of observation.
        <br />
        Examples:
        <div className="pl-10">
          <ul className="list-disc">
            <li>
              A single voter
            </li>
            <li>
              An individual student
            </li>
            <li>
              A specific car
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <ul className="list-disc">
          <li>
            <h2 className="text-base font-semibold">Distribution</h2>
          </li>
        </ul>
        A distribution is a mathematical function that describes how frequently values of a variable occur in a dataset. It shows how the data is spread out across different values. There are different distribution types: normal distribution, uniform distribution, binomial distribution, etc.
      </section>
    </div>
  )
}

export default H1A1