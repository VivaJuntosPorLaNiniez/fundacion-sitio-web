"use client";

import { useMemo, useState } from "react";
import MiniPortada from "@/components/ui/MiniPortada";
import PhoneInput from "react-phone-number-input";
import { User, IdCard, Mail, DollarSign } from "lucide-react";

export default function DonarPage() {
	const [stepIndex, setStepIndex] = useState(0);
    const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const [apiErrors, setApiErrors] = useState([]);
	const [selectedAmount, setSelectedAmount] = useState("");
	const [customAmount, setCustomAmount] = useState("");
	const [customAmountEnabled, setCustomAmountEnabled] = useState(false);
	const presetAmounts = [5, 10, 15, 25, 35, 45, 55, 65, 75, 100]; //Montos definidos

	// Estado para todos los datos del formulario
	const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        tipoDocumento: "DUI",
        numeroDocumento: "",
        email: "",
        telefono: "",
        monto: "",
		frecuencia: "Una sola vez"
    });

	// Función para actualizar el estado del formulario
	const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
		if (name === "monto") {
			setSelectedAmount("");
		}
		setErrors((prev) => {
			const nextErrors = { ...prev };
			delete nextErrors[name];
			return nextErrors;
		});
		if (apiErrors.length > 0) setApiErrors([]);
    };

	const mapBackendErrorsToState = (messages = []) => {
		const nextFieldErrors = {};
		const nextApiErrors = [];

		messages.forEach((message) => {
			const normalized = String(message || "").toLowerCase();

			if (normalized.includes("nombres")) {
				nextFieldErrors.nombres = message;
				return;
			}
			if (normalized.includes("apellidos")) {
				nextFieldErrors.apellidos = message;
				return;
			}
			if (normalized.includes("tipo de documento")) {
				nextFieldErrors.tipoDocumento = message;
				return;
			}
			if (normalized.includes("numero de documento")) {
				nextFieldErrors.numeroDocumento = message;
				return;
			}
			if (normalized.includes("correo electronico")) {
				nextFieldErrors.email = message;
				return;
			}
			if (normalized.includes("telefono")) {
				nextFieldErrors.telefono = message;
				return;
			}
			if (normalized.includes("monto")) {
				nextFieldErrors.monto = message;
				return;
			}
			if (normalized.includes("frecuencia")) {
				nextFieldErrors.frecuencia = message;
				return;
			}

			nextApiErrors.push(message);
		});

		return { nextFieldErrors, nextApiErrors };
	};

	const getStepFromFieldErrors = (fieldErrors) => {
		if (fieldErrors.nombres || fieldErrors.apellidos || fieldErrors.tipoDocumento || fieldErrors.numeroDocumento) {
			return 0;
		}
		if (fieldErrors.email || fieldErrors.telefono) {
			return 1;
		}
		if (fieldErrors.monto || fieldErrors.frecuencia) {
			return 2;
		}
		return null;
	};

	const validateOnBackend = async (payload, step = 'all') => {
		const response = await fetch('/api/checkout/validate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...payload, step })
		});

		const result = await response.json();
		if (result.success) {
			return { nextFieldErrors: {}, nextApiErrors: [] };
		}

		const backendMessages = Array.isArray(result.details)
			? result.details
			: [result.error || 'Rechazada'];
		return mapBackendErrorsToState(backendMessages);
	};

	// Definimos los pasos del formulario con useMemo
	const steps = useMemo(
		() => [
			{
				id: "datos",
				label: "Datos personales",
				content: (
					<>
						<label className="label">Nombres</label>
						<label className={`input validator w-full bg-slate-100 ${errors.nombres ? "border-rose-500" : "border-slate-300"}`}>
							<User className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input
								type="text"
								placeholder="Nombres"
								name="nombres"
								value={formData.nombres}
								onChange={handleInputChange}
							/>
						</label>
						{errors.nombres && <div className="text-sm text-rose-600">{errors.nombres}</div>}

						<label className="label mt-3">Apellidos</label>
						<label className={`input validator w-full bg-slate-100 ${errors.apellidos ? "border-rose-500" : "border-slate-300"}`}>
							<User className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input 
								type="text" 
								placeholder="Apellidos" 
								name="apellidos"
								value={formData.apellidos}
								onChange={handleInputChange}
							/>
						</label>
						{errors.apellidos && <div className="text-sm text-rose-600">{errors.apellidos}</div>}

						<label className="label mt-3">Tipo de documento</label>
						<select 
						className={`select w-full bg-slate-100 ${errors.tipoDocumento ? "border-rose-500" : "border-slate-300"}`}
						name="tipoDocumento"
						value={formData.tipoDocumento}
						onChange={handleInputChange}
						>
							<option>DUI</option>
							<option>Pasaporte</option>
							<option>Licencia de conducir</option>
						</select>
						{errors.tipoDocumento && <div className="text-sm text-rose-600">{errors.tipoDocumento}</div>}

						<label className="label mt-3">Número de documento</label>
						<label className={`input validator w-full bg-slate-100 ${errors.numeroDocumento ? "border-rose-500" : "border-slate-300"}`}>
							<IdCard className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input 
							type="text" 
							placeholder="Número de documento" 
							name="numeroDocumento"
							value={formData.numeroDocumento}
							onChange={handleInputChange}
							/>
						</label>
						{errors.numeroDocumento && <div className="text-sm text-rose-600">{errors.numeroDocumento}</div>}
					</>
				),
			},
			{
				id: "contacto",
				label: "Contacto",
				content: (
					<>
						<label className="label">Email</label>
						<label className={`input validator w-full bg-slate-100 ${errors.email ? "border-rose-500" : "border-slate-300"}`}>
							<Mail className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input 
								type="email" 
								placeholder="mail@site.com" 
								name="email"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</label>
						{errors.email && <div className="text-sm text-rose-600">{errors.email}</div>}

						<label className="label mt-3">Teléfono</label>
						<PhoneInput
							defaultCountry="SV"
							value={formData.telefono}
							onChange={(val) => {
								setFormData(prev => ({ ...prev, telefono: val || "" }));
								if (apiErrors.length > 0) setApiErrors([]);
							}}
							placeholder="0000-0000"
							className="phone-input"
						/>
						{errors.telefono && <div className="text-sm text-rose-600">{errors.telefono}</div>}
					</>
				),
			},
			{
				id: "monto",
				label: "Monto",
				content: (
					<>
						<label className="label">Monto a donar</label>
						<div className="flex flex-wrap gap-2">
							{presetAmounts.map((amount) => (
								<label
									key={amount}
									className={`btn btn-outline ${
										selectedAmount === String(amount) ? "btn-active" : ""
									} ${customAmountEnabled ? "opacity-50 cursor-not-allowed" : ""}`}
								>
									<input
										type="radio"
										name="donationAmount"
										className="hidden"
										value={amount}
										disabled={customAmountEnabled}
										checked={selectedAmount === String(amount)}
                                        onChange={() => {
											setSelectedAmount(String(amount));
											setFormData(prev => ({ ...prev, monto: String(amount) }));
										}}
									/>
									${amount}
								</label>
							))}
						</div>

						<label className="label mt-3 flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								className="checkbox checkbox-sm border-slate-500 bg-white checked:border-black checked:bg-black [--chkfg:#ffffff]"
								checked={customAmountEnabled}
								onChange={(event) => {
									const isChecked = event.target.checked;
									setCustomAmountEnabled(isChecked);
									if (isChecked) {
										setSelectedAmount("");
									} else {
										setFormData(prev => ({ ...prev, monto: "" }));
										setCustomAmount("");
										setSelectedAmount("");
									}
								}}
							/>
							
							<span>Personalizar monto</span>
						</label>
						<label className="input validator w-full bg-slate-100 border-slate-300">
							<DollarSign className="mr-2 shrink-0 text-slate-400" size={16} />
							<input
								type="number"
								placeholder="Monto"
								name="monto"
								value={customAmountEnabled ? formData.monto : ""}
								disabled={!customAmountEnabled}
								onChange={(event) => {
									setSelectedAmount("");
									handleInputChange(event);
								}}
							/>
						</label>
						{errors.monto && <div className="text-sm text-rose-600">{errors.monto}</div>}

						<label className="label mt-3">Frecuencia</label>
						<select 
						className={`select w-full bg-slate-100 ${errors.frecuencia ? "border-rose-500" : "border-slate-300"}`}
						name="frecuencia"
						value={formData.frecuencia}
						onChange={handleInputChange}
						>
							<option>Una sola vez</option>
							<option>Mensual</option>
							<option>Anual</option>
						</select>
						{errors.frecuencia && <div className="text-sm text-rose-600">{errors.frecuencia}</div>}
					</>
				),
			},
			{
				id: "confirmacion",
				label: "Confirmacion",
				content: (
					<>
					<p className="text-sm text-slate-600">
						Revisa tus datos antes de finalizar tu donacion.
					</p>
					<div className="text-slate-700 space-y-2 text-sm bg-white p-4 rounded-xl border border-slate-200">
                        <p><strong>Donante:</strong> {formData.nombres} {formData.apellidos}</p>
                        <p><strong>Documento:</strong> {formData.tipoDocumento} - {formData.numeroDocumento}</p>
                        <p><strong>Contacto:</strong> {formData.email} | {formData.telefono}</p>
                        <p className="text-base text-emerald-600 font-bold"><strong>Monto a donar:</strong> ${formData.monto} ({formData.frecuencia})</p>
                    </div>
					</>
				),
			},
		],
		[presetAmounts, selectedAmount, customAmount, customAmountEnabled, formData]
	);

	// Función para manejar la finalización de la donación
	// Dentro de src/app/donar/page.js
const handleFinalizarDonacion = async () => {
	setLoading(true);
	try {
		const { nextFieldErrors, nextApiErrors } = await validateOnBackend(formData, 'all');
		if (Object.keys(nextFieldErrors).length > 0 || nextApiErrors.length > 0) {
			setErrors(nextFieldErrors);
			setApiErrors(nextApiErrors);
			const stepWithError = getStepFromFieldErrors(nextFieldErrors);
			if (stepWithError !== null) {
				setStepIndex(stepWithError);
			}
			return;
		}

		// Mandamos los datos del donante para crear el enlace de pago
		const respuestaPago = await fetch("/api/checkout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				monto: parseFloat(formData.monto),
				nombres: formData.nombres,
				apellidos: formData.apellidos,
				tipoDocumento: formData.tipoDocumento,
				numeroDocumento: formData.numeroDocumento,
				email: formData.email,
				telefono: formData.telefono,
				frecuencia: formData.frecuencia
			}),
		});

		const resultadoFinal = await respuestaPago.json();

		if (resultadoFinal.success && resultadoFinal.url) {
			window.location.href = resultadoFinal.url;
			return;
		}

		if (resultadoFinal.success) {
			alert("Enlace de pago creado, pero no se recibió URL.");
		} else {
			const backendMessages = Array.isArray(resultadoFinal.details)
				? resultadoFinal.details
				: [resultadoFinal.error || "Rechazada"];
			const { nextFieldErrors, nextApiErrors } = mapBackendErrorsToState(backendMessages);
			setErrors(nextFieldErrors);
			setApiErrors(nextApiErrors);
			const stepWithError = getStepFromFieldErrors(nextFieldErrors);
			if (stepWithError !== null) {
				setStepIndex(stepWithError);
			}
		}
	} catch (err) {
		console.error(err);
		alert("Ocurrió un error inesperado al procesar la donación.");
	} finally {
		setLoading(false);
	}
};

	// Función para manejar el click en Siguiente o Confirmar y pagar
	const handleNext = () => {
		if (loading) return;

		if (!isLastStep) {
			validateOnBackend(formData, stepIndex).then(({ nextFieldErrors, nextApiErrors }) => {
				if (Object.keys(nextFieldErrors).length > 0 || nextApiErrors.length > 0) {
					setErrors(nextFieldErrors);
					setApiErrors(nextApiErrors);
					const stepWithError = getStepFromFieldErrors(nextFieldErrors);
					if (stepWithError !== null) {
						setStepIndex(stepWithError);
					}
					return;
				}
				setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
			}).catch((err) => {
				console.error(err);
				alert("No se pudo validar el paso actual.");
			});
			return;
		}

        if (isLastStep) {
            handleFinalizarDonacion();
        } else {
            setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };

	// Lógica para determinar si estamos en el primer o último paso
	const isFirstStep = stepIndex === 0;
	const isLastStep = stepIndex === steps.length - 1;
	const currentStep = steps[stepIndex];

	return (
		<>
		{loading && (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-6">
				<div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
					<span className="loading loading-spinner loading-lg text-slate-800" aria-hidden="true" />
					<h3 className="mt-5 text-xl font-semibold text-slate-900">Procesando donacion</h3>
					<p className="mt-2 text-sm text-slate-600">
						Estamos preparando tu enlace de pago. Esto puede tardar unos segundos.
					</p>
				</div>
			</div>
		)}
		<MiniPortada
			imageSrc="/portadas/donar.jpg"
			imageAlt="Donar"
			title="Donar"
			description="Gracias por tu interés en apoyar nuestra causa. Aquí encontrarás toda la información necesaria para realizar tu donación de manera segura y efectiva."
		/>
		
		<section className="px-6 py-8">
			<div className="mx-auto w-full max-w-3xl">
				<div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm md:px-12">
					<h2 className="text-2xl font-bold text-slate-900">Ingrese sus datos</h2>
					<div className="mt-6">
						<div className="grid gap-6 md:grid-cols-[200px_1fr]">
							<ul className="steps steps-horizontal md:steps-vertical overflow-x-auto">
								{steps.map((step, index) => (
									<li
										key={step.id}
										className={`step ${index <= stepIndex ? "step-brand" : ""}`}
									>
										{step.label}
									</li>
								))}
							</ul>

							<div className="card border border-slate-200 bg-slate-50 shadow-sm animate-step" key={currentStep.id}>
								<div className="card-body">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-semibold text-slate-900">
											{currentStep.label}
										</h3>
										<span className="text-xs font-semibold text-slate-500">
											Paso {stepIndex + 1} de {steps.length}
										</span>
									</div>

									<div className="mt-4 grid gap-3">{currentStep.content}</div>

									{apiErrors.length > 0 && (
										<div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
											{apiErrors.map((errorMsg, index) => (
												<p key={`${errorMsg}-${index}`}>{errorMsg}</p>
											))}
										</div>
									)}

									<div className="mt-6 flex flex-wrap items-center justify-between gap-3">
										<button
											type="button"
											className="btn btn-outline"
											disabled={isFirstStep || loading}
											onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
										>
											Anterior
										</button>
										<button
											type="button"
											className="btn btn-neutral"
											disabled={loading}
											onClick={handleNext}
										>
											{loading ? "Procesando..." : isLastStep ? "Confirmar y pagar" : "Siguiente"}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
}