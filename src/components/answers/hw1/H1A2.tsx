const H1A2 = () => {
  return (
    <div className="pl-6">
      <section>
        <ul className="list-disc">
          <li>
            <h2 className="text-base font-semibold">The Notion of Average</h2>
          </li>
        </ul>
        Average, or mean, is a statistical measure that represents the central value of a dataset. It is calculated by summing all the values in a dataset and dividing by the total number of values.
        <br />
        There are three main types of averages:
        <br />
        <div className="pl-10">
          <ul className="list-disc">
            <li>
              Mean (or Arithmetic mean): The most common type of average, calculated as the sum of all values divided by the number of values.
            </li>
            <li>
              Median: The middle value when all the numbers in a dataset are arranged in ascending or descending order. If there is an even number of values, the median is the average of the two middle numbers.
            </li>
            <li>
              Mode: The value that appears most frequently in a dataset. A dataset can have more than one mode or none at all if no number repeats.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <ul className="list-disc">
          <li>
            <h2 className="text-base font-semibold">Computational Problems with Floating-Point Representation</h2>
          </li>
        </ul>
        Floating-point numbers are approximations of real numbers that are stored in a computer's memory. Due to the finite precision of these representations, numerical errors can occur during computations.
        <br />
        <div className="pl-10">
          <ul className="list-disc">
            <li>
              <span className="font-semibold">Rounding errors</span>: When a real number is converted to a floating - point number, it may be rounded up or down to the nearest representable value.This can lead to small errors in calculations.
            </li>
            <li>
              <span className="font-semibold">Catastrophic cancellation</span>: This occurs when two nearly equal floating - point numbers are subtracted, resulting in a much smaller number with a relatively large relative error.This can be particularly problematic when calculating differences between large quantities.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <ul className="list-disc">
          <li>
            <h2 className="text-base font-semibold">Numerical Solutions (Knuth)</h2>
          </li>
        </ul>
        Donald Knuth, a renowned computer scientist, has proposed several techniques to mitigate the effects of floating-point errors:
        <br />
        <div className="pl-10">
          <ul className="list-disc">
            <li>
              <span className="font-semibold">Using higher-precision arithmetic</span>: By using floating-point numbers with more bits, the precision can be increased, reducing the impact of rounding errors.
            </li>
            <li>
              <span className="font-semibold">Avoiding catastrophic cancellation</span>: In some cases, it is possible to rearrange calculations to avoid subtracting nearly equal numbers. For example, using the formula <code>(a&#x2b;b)&#8729;(a&#x2212;b)=a<sup>2</sup>&#x2212;b<sup>2</sup></code> can be more numerically stable than directly calculating <code>(a&#8729;a)&#x2212;(b&#8729;b)</code>.
            </li>
            <li>
              <span className="font-semibold">Using interval arithmetic</span>: This involves representing numbers as intervals rather than single values, allowing for the propagation of uncertainty through calculations.
            </li>
            <li>
              <span className="font-semibold">Employing compensated algorithms</span>: These algorithms introduce additional calculations to compensate for rounding errors and improve the accuracy of the result.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default H1A2;