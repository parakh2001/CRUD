import React from 'react'
export const ModelForm = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal" >
                <div className="modal-box">
                    <h3 className='font-bold text-lg py-4'></h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
                        <button className='btn btn-success'></button>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
