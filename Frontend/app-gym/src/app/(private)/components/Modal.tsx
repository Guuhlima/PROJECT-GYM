'use client';

import React from "react";
import { ModalProps } from "../Types/ModalProps";

export default function Modal({ title, description, isOpen, onClose, children, primaryAction }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative z-50 w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm text-blue-300">Aviso</p>
                        <h3 className="text-2xl font-semibold text-white">{title}</h3>
                        {description && <p className="mt-2 text-slate-400 text-sm">{description}</p>}
                    </div>
                    <button
                        aria-label="Fechar modal"
                        className="rounded-full bg-white/10 px-2 py-1 text-sm text-gray-200 hover:bg-white/20 transition"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                {children && <div className="mt-4 text-slate-200">{children}</div>}

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="rounded-lg px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
                    >
                        Fechar
                    </button>
                    {primaryAction && (
                        <button
                            onClick={primaryAction.onClick}
                            className="rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:brightness-110"
                        >
                            {primaryAction.label}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
