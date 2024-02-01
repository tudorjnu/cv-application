export function BasicsForm() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        Institution:
        <input type="text" name="institution" />
      </label>
      <label>
        URL:
        <input type="url" name="url" />
      </label>
      <label>
        Area:
        <input type="text" name="area" />
      </label>
      <label>
        Study Type:
        <input type="text" name="studyType" />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" />
      </label>
      <label>
        Score:
        <input type="number" name="score" />
      </label>
      <label>
        courses:
        <input type="text" name="courses" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
