"use client";

import { useMemo, useState } from "react";
import MiniPortada from "@/components/ui/MiniPortada";
import PhoneInput from "react-phone-number-input";
import { User, IdCard, Mail, DollarSign } from "lucide-react";

export default function DonarPage() {
	const [stepIndex, setStepIndex] = useState(0);
	const [phone, setPhone] = useState("");
	const [selectedAmount, setSelectedAmount] = useState("");
	const [customAmount, setCustomAmount] = useState("");
	const [customAmountEnabled, setCustomAmountEnabled] = useState(false);
	const presetAmounts = [5, 10, 15, 25, 35, 45, 55, 65, 75, 100];

	const steps = useMemo(
		() => [
			{
				id: "datos",
				label: "Datos personales",
				content: (
					<>
						<label className="label">Nombres</label>
						<label className="input validator w-full bg-slate-100 border-slate-300">
							<User className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input type="text" placeholder="Nombres" required />
						</label>
						<div className="validator-hint hidden">Debe ingresar su nombre</div>

						<label className="label mt-3">Apellidos</label>
						<label className="input validator w-full bg-slate-100 border-slate-300">
							<User className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input type="text" placeholder="Apellidos" required />
						</label>
						<div className="validator-hint hidden">Debe ingresar sus apellidos</div>

						<div className="validator-hint hidden">Debe ingresar sus apellidos</div>
						<label className="label mt-3">Tipo de documento</label>
						<select className="select w-full bg-slate-100 border-slate-300">
							<option>DUI</option>
							<option>Pasaporte</option>
							<option>Licencia de conducir</option>
						</select>
						<label className="label mt-3">Número de documento</label>
						<label className="input validator w-full bg-slate-100 border-slate-300">
							<IdCard className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input type="text" placeholder="Número de documento" required />
						</label>
						<div className="validator-hint hidden">Debe ingresar su número de documento</div>
					</>
				),
			},
			{
				id: "contacto",
				label: "Contacto",
				content: (
					<>
						<label className="label">Email</label>
						<label className="input validator w-full bg-slate-100 border-slate-300">
							<Mail className="mr-2 shrink-0 text-slate-400"
							size={16} />
							<input type="email" placeholder="mail@site.com" required />
						</label>
						<div className="validator-hint hidden">Ingresa un correo electrónico válido</div>
						<label className="label mt-3">Teléfono</label>
						<PhoneInput
							defaultCountry="SV"
							value={phone}
							onChange={setPhone}
							placeholder="0000-0000"
							required
							className="phone-input"
						/>
						<div className="validator-hint hidden">Ingresa un número de teléfono válido</div>
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
											setCustomAmount("");
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
										setCustomAmount("");
									}
								}}
							/>
							<span>Personalizar monto</span>
						</label>
						<label className="input validator w-full bg-slate-100 border-slate-300">
							<DollarSign className="mr-2 shrink-0 text-slate-400" size={16} />
							<input
								type="number"
								min="5"
								placeholder="Monto"
								value={customAmount}
								disabled={!customAmountEnabled}
								onChange={(event) => {
									setCustomAmount(event.target.value);
									setSelectedAmount("");
								}}
							/>
						</label>
						<label className="label mt-3">Frecuencia</label>
						<select className="select w-full bg-slate-100 border-slate-300">
							<option>Una sola vez</option>
							<option>Mensual</option>
							<option>Anual</option>
						</select>
					</>
				),
			},
			{
				id: "confirmacion",
				label: "Confirmacion",
				content: (
					<p className="text-sm text-slate-600">
						Revisa tus datos antes de finalizar tu donacion.
					</p>
				),
			},
		],
		[presetAmounts, selectedAmount, customAmount, customAmountEnabled]
	);

	const isFirstStep = stepIndex === 0;
	const isLastStep = stepIndex === steps.length - 1;
	const currentStep = steps[stepIndex];

	return (
		<>
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

									<div className="mt-6 flex flex-wrap items-center justify-between gap-3">
										<button
											type="button"
											className="btn btn-outline"
											disabled={isFirstStep}
											onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
										>
											Anterior
										</button>
										<button
											type="button"
											className="btn btn-neutral"
											onClick={() =>
												setStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
											}
										>
											{isLastStep ? "Finalizar" : "Siguiente"}
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