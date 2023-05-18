

export const Application = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="job-location">Job Location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="germany">Germany</option>
                    <option value="spain">Spain</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States of America</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms"/> I agree with the terms and conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}