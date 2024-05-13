import React, { useState } from 'react';
import Modal from './Modal';

const RulesTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const rules = [
        { id: 1, name: "IP", value: "IPs Denegadas" },
        { id: 2, name: "Hora", value: "00:00 - 00:00" },
        { id: 3, name: "Monto Máximo", value: "5000 soles" },
        { id: 4, name: "Cantidad de Transacciones", value: "5 transacciones" }
    ];

    const handleEdit = (rule) => {
        setModalContent(`¿Estás seguro que deseas editar la regla de ${rule.name}?`);
        setIsModalOpen(true);
    };

    return (
        <>
            <table className="min-w-full leading-normal mt-5">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Reglas
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actual
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Editar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rules.map(rule => (
                        <tr key={rule.id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {rule.name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {rule.value}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button onClick={() => handleEdit(rule)}
                                        className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700">
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} title="Editar Regla">
                <p>{modalContent}</p>
                <div className="mt-4 flex justify-end">
                    <button onClick={() => setIsModalOpen(false)} className="mr-2 px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700">Cancelar</button>
                    <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-700">Confirmar</button>
                </div>
            </Modal>
        </>
    );
};

export default RulesTable;
