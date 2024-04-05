import { useDispatch, useSelector } from "react-redux";
import { ownerSlice } from "./ownerSlice";

export const Owner = () => {
    const dispatch = useDispatch();
    const { owner } = useSelector((state) => state.owner)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const firstName = evt.currentTarget.firstName.value;
        dispatch(ownerSlice.actions.updateFirstName(firstName));
    };

    return (
        <form onSubmit={handleSubmit} className="OwnerForm">
          <h2>Propriétaire du restaurant</h2>
          {owner?.firstName ? (
            <span className="OwnerName">
              Le propriétaire du restaurant est {owner.firstName}
            </span>
          ) : (
            <span className="OwnerName">
              Le propriétaire du restaurant n&#39;est pas configuré
            </span>
          )}
          <label>
            Prénom du propriétaire
            <input type="text" name="firstName" />
          </label>
          <button type="submit">configurer le propriétaire</button>
        </form>
      );
}