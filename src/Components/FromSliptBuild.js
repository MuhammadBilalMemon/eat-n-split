import { Button } from "./Button";

export function FromSliptBuild() {
    return (
        <form className="form-split-bill">
            <h2>Split a bill with X</h2>

            <label>Bill Value</label>
            <input type="text" />

            <label>X's expenses</label>
            <input type="text" />

            <label>Bill Value</label>
            <input type="text" disabled />

            <label>🤑 Who is paying the bill?</label>
            <select>
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    );
}