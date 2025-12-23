export default function RobotCheck({ checked, setChecked }) {
  return (
    <label className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span>I am not a robot</span>
    </label>
  );
}
