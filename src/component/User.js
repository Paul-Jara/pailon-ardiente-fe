import LabelInput from "./LabelInput"

const User = ({ user }) => {

    return (
        <div>
            <LabelInput labelText="Nombre" name="name" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.name} readOnly="true" />
            <LabelInput labelText="Apellido" name="lastname" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.lastname} readOnly="true" />
            <LabelInput labelText="Teléfono" name="phone" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.phone} readOnly="true" />
            <LabelInput labelText="Correo electrónico" name="email" autoComplete="true"
                type="email" isRequired={true} defaultValue={user?.email} readOnly="true" />
            <LabelInput labelText="Provincia" name="province" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.province} readOnly="true" />
            <LabelInput labelText="Ciudad" name="city" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.city} readOnly="true" />
            <LabelInput labelText="Dirección" name="address" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.address} readOnly="true" />
            <LabelInput labelText="Código postal" name="zipCode" autoComplete="true"
                type="text" isRequired={true} defaultValue={user?.zipCode} readOnly="true" />
        </div>
    )
}

export default User