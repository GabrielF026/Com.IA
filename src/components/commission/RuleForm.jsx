// RuleForm.jsx — Passo 3: Simulação real
import React, { useState, useMemo } from "react";

// ===== Design system (Input/Select/Button/Section minimal) =====
export function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...props}
        className={`border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 outline-none ${props.className || ""}`}
      />
    </div>
  );
}

export function Select({ label, children, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <select
        {...props}
        className={`border p-2 rounded w-full focus:ring-2 focus:ring-blue-400 outline-none ${props.className || ""}`}
      >
        {children}
      </select>
    </div>
  );
}

export function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded text-sm font-medium transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button {...props} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export function Card({ children }) {
  return <div className="p-4 bg-white rounded-xl shadow border">{children}</div>;
}

export function Section({ title, children }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      {children}
    </Card>
  );
}

// ====== Initial rule ======
const initialRule = {
  name: "",
  description: "",
  active: true,
  type: "percentual",
  calculationType: "percent_total", // percent_total, percent_parcela, fixo_contrato, fixo_parcela, faixas
  applyOn: "primeira",
  ranges: [], // {min, max, value} where value can be "1.5%" or "1000"
  conditions: [],
  rangesBase: "total", // "total" or "parcela" - user choice for applying ranges
};

export default function RuleForm() {
  const [rule, setRule] = useState(initialRule);

  function updateField(field, value) {
    setRule((prev) => ({ ...prev, [field]: value }));
  }

  function saveRule() {
    console.log("Regra salva:", rule);
    alert("Regra salva no console! (simulação)");
  }

  return (
    <div className="space-y-6 p-6">
      <RuleGeneralSection rule={rule} updateField={updateField} />
      <RuleParametersSection rule={rule} updateField={updateField} />
      <RuleConditionsSection rule={rule} updateField={updateField} />
      <RuleSimulation rule={rule} updateField={updateField} />
      <RuleActions onSave={saveRule} />
    </div>
  );
}

// -------------------- General --------------------
export function RuleGeneralSection({ rule, updateField }) {
  return (
    <Section title="Informações Gerais">
      <div className="grid grid-cols-2 gap-4">
        <Input label="Nome da Regra" value={rule.name} onChange={(e) => updateField("name", e.target.value)} />
        <Select label="Tipo da Regra" value={rule.type} onChange={(e) => updateField("type", e.target.value)}>
          <option value="percentual">Percentual</option>
          <option value="fixa">Valor Fixo</option>
          <option value="hibrida">Híbrida</option>
        </Select>
      </div>

      <Input label="Descrição" value={rule.description} onChange={(e) => updateField("description", e.target.value)} />

      <label className="flex items-center gap-2 mt-2">
        <input type="checkbox" checked={rule.active} onChange={(e) => updateField("active", e.target.checked)} /> Regra ativa
      </label>
    </Section>
  );
}

// -------------------- Parameters --------------------
export function RuleParametersSection({ rule, updateField }) {
  const [ranges, setRanges] = useState(rule.ranges || []);

  function syncRanges(newList) {
    setRanges(newList);
    updateField("ranges", newList);
  }

  // quick helpers to add/remove ranges
  function addRange() {
    syncRanges([...ranges, { min: "", max: "", value: "" }]);
  }
  function removeRange(i) {
    const list = [...ranges];
    list.splice(i, 1);
    syncRanges(list);
  }

  return (
    <Section title="Parâmetros da Comissão">
      <Select label="Tipo de cálculo" value={rule.calculationType} onChange={(e) => updateField("calculationType", e.target.value)}>
        <option value="percent_total">% sobre valor total</option>
        <option value="percent_parcela">% sobre parcela</option>
        <option value="fixo_contrato">Valor fixo por contrato</option>
        <option value="fixo_parcela">Valor fixo por parcela</option>
        <option value="faixas">Faixas de valor</option>
      </Select>

      {rule.calculationType === "faixas" && (
        <div className="space-y-4 mt-4 border p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Faixas de valor (progressivo)</h3>
            <div className="flex gap-2 items-center">
              <Select label="Base das faixas" value={rule.rangesBase} onChange={(e) => updateField("rangesBase", e.target.value)}>
                <option value="total">Valor total do contrato</option>
                <option value="parcela">Valor da parcela</option>
              </Select>
              <Button onClick={addRange}>+ Faixa</Button>
            </div>
          </div>
          {ranges.length === 0 && <div className="text-sm text-gray-500">Nenhuma faixa definida.</div>}
          {ranges.map((r, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-3">
                <Input label="Mín" value={r.min} onChange={(e) => { const l = [...ranges]; l[i].min = e.target.value; syncRanges(l); }} />
              </div>
              <div className="col-span-3">
                <Input label="Máx" value={r.max} onChange={(e) => { const l = [...ranges]; l[i].max = e.target.value; syncRanges(l); }} />
              </div>
              <div className="col-span-4">
                <Input label="% ou R$" value={r.value} onChange={(e) => { const l = [...ranges]; l[i].value = e.target.value; syncRanges(l); }} />
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="secondary" onClick={() => removeRange(i)}>Remover</Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Select label="Aplicar em" value={rule.applyOn} onChange={(e) => updateField("applyOn", e.target.value)}>
        <option value="primeira">Primeira parcela</option>
        <option value="todas">Todas as parcelas</option>
        <option value="selecionadas">Parcelas selecionadas</option>
        <option value="ativas">Somente contratos ativos</option>
        <option value="aprovacao">Após aprovação</option>
      </Select>
    </Section>
  );
}

// -------------------- Conditions (light) --------------------
export function RuleConditionsSection({ rule, updateField }) {
  const conditions = rule.conditions || [];

  function add() {
    updateField("conditions", [...conditions, { field: "", op: "=", value: "" }]);
  }
  function update(i, field, val) {
    const list = [...conditions];
    list[i][field] = val;
    updateField("conditions", list);
  }
  function remove(i) {
    const list = [...conditions];
    list.splice(i, 1);
    updateField("conditions", list);
  }

  return (
    <Section title="Condições adicionais">
      <div className="flex justify-between items-center">
        <div />
        <Button onClick={add}>+ Condição</Button>
      </div>

      <div className="space-y-3 mt-3">
        {conditions.length === 0 && <div className="text-sm text-gray-500">Nenhuma condição definida.</div>}
        {conditions.map((c, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 items-end">
            <div className="col-span-4">
              <Select value={c.field} onChange={(e) => update(i, "field", e.target.value)}>
                <option value="">Selecione…</option>
                <option value="tipoContrato">Tipo do contrato</option>
                <option value="valorMinimo">Valor mínimo</option>
                <option value="status">Status</option>
                <option value="origem">Origem</option>
                <option value="produto">Produto</option>
                <option value="grupo">Grupo</option>
                <option value="pagamento">Forma de pagamento</option>
              </Select>
            </div>

            <div className="col-span-3">
              <Select value={c.op} onChange={(e) => update(i, "op", e.target.value)}>
                <option value="=">=</option>
                <option value=">">&gt;</option>
                <option value="<">&lt;</option>
                <option value="between">entre</option>
              </Select>
            </div>

            <div className="col-span-4">
              <Input value={c.value} onChange={(e) => update(i, "value", e.target.value)} />
            </div>

            <div className="col-span-1">
              <Button variant="danger" onClick={() => remove(i)}>X</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// -------------------- Helper: parse number or percent --------------------
function parseNumber(str) {
  if (str === null || str === undefined || String(str).trim() === "") return null;
  const s = String(str).replace(",", ".").replace(/\s/g, "");
  if (s.endsWith("%")) {
    const n = parseFloat(s.slice(0, -1));
    return isNaN(n) ? null : { type: "percent", value: n / 100 };
  }
  const n = parseFloat(s);
  return isNaN(n) ? null : { type: "amount", value: n };
}

// -------------------- Helper: compute progressive by ranges --------------------
function computeProgressive(ranges = [], baseValue = 0) {
  // ranges: [{min, max, value}] - values strings like "1.5%" or "1000"
  // Assumes ranges may be unsorted; sort by min numeric asc
  const normalized = ranges
    .map((r) => {
      const min = parseFloat(String(r.min || "0").replace(",", ".") || 0);
      const max = r.max === "" || r.max === null || r.max === undefined ? Infinity : parseFloat(String(r.max).replace(",", "."));
      const parsed = parseNumber(r.value);
      return { min: isNaN(min) ? 0 : min, max: isNaN(max) ? Infinity : max, parsed };
    })
    .sort((a, b) => a.min - b.min);

  let remaining = baseValue;
  let total = 0;
  const breakdown = [];

  for (let i = 0; i < normalized.length; i++) {
    const { min, max, parsed } = normalized[i];
    if (baseValue <= min) continue; // nothing in this bracket

    const bracketStart = min;
    const bracketEnd = max;
    const width = bracketEnd === Infinity ? baseValue - bracketStart : Math.max(0, Math.min(baseValue, bracketEnd) - bracketStart);
    if (width <= 0) continue;

    let partValue = width;
    let partCommission = 0;
    if (!parsed) {
      partCommission = 0;
    } else if (parsed.type === "percent") {
      partCommission = (parsed.value) * partValue;
    } else {
      // fixed amount: interpret as fixed amount for the bracket portion (we'll treat it as amount per unit base? here we assume fixed amount * number of units?)
      // Simpler: treat fixed as absolute amount applied once for entire portion (not per unit)
      // To keep sensible, apply fixed as fixed * (partValue / baseValue) proportionally.
      partCommission = parsed.value * (partValue / baseValue || 0);
    }

    total += partCommission;
    breakdown.push({
      min: bracketStart,
      max: bracketEnd === Infinity ? null : bracketEnd,
      baseInBracket: partValue,
      rule: parsed,
      partCommission,
    });
  }

  return { total, breakdown };
}

// -------------------- Main computeCommission --------------------
function computeCommission(rule, contractValue = 0, parcelValue = 0) {
  // Evaluate simple conditions (basic support for valorMinimo only)
  // For now, if any condition fails, we return 0 and reason. (You can enhance later)
  if (rule.conditions && rule.conditions.length > 0) {
    for (const c of rule.conditions) {
      if (!c.field) continue;
      if (c.field === "valorMinimo") {
        const val = parseFloat(String(c.value).replace(",", "."));
        if (isNaN(val)) continue;
        if (c.op === "=" && !(contractValue === val)) return { total: 0, reason: `Condição não satisfeita: valorMinimo = ${c.value}` };
        if (c.op === ">" && !(contractValue > val)) return { total: 0, reason: `Condição não satisfeita: valorMinimo > ${c.value}` };
        if (c.op === "<" && !(contractValue < val)) return { total: 0, reason: `Condição não satisfeita: valorMinimo < ${c.value}` };
        if (c.op === "between") {
          // expect value like "1000-2000"
          const parts = String(c.value).split("-").map((s) => parseFloat(s.replace(",", ".")));
          if (parts.length === 2) {
            if (!(contractValue >= parts[0] && contractValue <= parts[1])) return { total: 0, reason: `Condição não satisfeita: entre ${c.value}` };
          }
        }
      }
      // other condition types (tipoContrato, origem etc.) require extra data to evaluate — skip for now
    }
  }

  // Decide base for calculation depending on rule.calculationType
  const calc = rule.calculationType;
  if (calc === "percent_total" || calc === "faixas" || calc === "fixo_contrato") {
    const base = contractValue;
    if (calc === "percent_total") {
      // value field? For single percent, we expect rule.ranges maybe empty and a rule.value? but earlier we used ranges only.
      // We'll interpret range[0].value if ranges provided, else use rule.singleValue (not present). To be robust:
      if (rule.ranges && rule.ranges.length === 0 && rule.singleValue) {
        const parsed = parseNumber(rule.singleValue);
        if (parsed && parsed.type === "percent") return { total: parsed.value * base, breakdown: [{ note: "single percent", partCommission: parsed.value * base }] };
      }
      // fallback: no single => 0
      return { total: 0, breakdown: [], reason: "Nenhum percentual definido" };
    } else if (calc === "fixo_contrato") {
      if (rule.singleValue) {
        const parsed = parseNumber(rule.singleValue);
        if (parsed && parsed.type === "amount") return { total: parsed.value, breakdown: [{ note: "valor fixo" }] };
      }
      return { total: 0, breakdown: [], reason: "Nenhum valor fixo definido" };
    } else if (calc === "faixas") {
      // choose base depending on rule.rangesBase ('total' or 'parcela')
      const baseForRanges = rule.rangesBase === "parcela" ? parcelValue : contractValue;
      const res = computeProgressive(rule.ranges || [], baseForRanges);
      return res;
    }
  } else if (calc === "percent_parcela" || calc === "fixo_parcela") {
    const base = parcelValue;
    if (calc === "percent_parcela") {
      if (rule.singleValue) {
        const parsed = parseNumber(rule.singleValue);
        if (parsed && parsed.type === "percent") return { total: parsed.value * base, breakdown: [{ note: "percent parcela", partCommission: parsed.value * base }] };
      }
      return { total: 0, breakdown: [], reason: "Nenhum percentual para parcela" };
    } else if (calc === "fixo_parcela") {
      if (rule.singleValue) {
        const parsed = parseNumber(rule.singleValue);
        if (parsed && parsed.type === "amount") return { total: parsed.value, breakdown: [{ note: "valor fixo parcela" }] };
      }
      return { total: 0, breakdown: [], reason: "Nenhum valor fixo para parcela" };
    }
  }

  // If hybrid, attempt: if singleValue exists, treat as percent on contract
  if (rule.type === "hibrida" && rule.singleValue) {
    const parsed = parseNumber(rule.singleValue);
    if (parsed && parsed.type === "percent") return { total: parsed.value * contractValue, breakdown: [{ note: "híbrida (percent)", partCommission: parsed.value * contractValue }] };
  }

  return { total: 0, breakdown: [], reason: "Regra não reconhecida" };
}

// -------------------- Simulation UI --------------------
export function RuleSimulation({ rule, updateField }) {
  const [contractValueInput, setContractValueInput] = useState("");
  const [parcelValueInput, setParcelValueInput] = useState("");

  // parsed numeric values
  const contractValue = useMemo(() => {
    const n = parseFloat(String(contractValueInput).replace(",", "."));
    return isNaN(n) ? 0 : n;
  }, [contractValueInput]);

  const parcelValue = useMemo(() => {
    const n = parseFloat(String(parcelValueInput).replace(",", "."));
    return isNaN(n) ? 0 : n;
  }, [parcelValueInput]);

  const result = useMemo(() => computeCommission(rule, contractValue, parcelValue), [rule, contractValue, parcelValue]);

  return (
    <Section title="Simulação (teste da regra)">
      <div className="grid grid-cols-3 gap-4">
        <Input label="Valor do contrato (R$)" value={contractValueInput} onChange={(e) => setContractValueInput(e.target.value)} />
        <Input label="Valor da parcela (R$)" value={parcelValueInput} onChange={(e) => setParcelValueInput(e.target.value)} />
        {rule.calculationType === "faixas" && (
          <Select label="Base das faixas" value={rule.rangesBase} onChange={(e) => updateField("rangesBase", e.target.value)}>
            <option value="total">Valor total do contrato</option>
            <option value="parcela">Valor da parcela</option>
          </Select>
        )}
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded border text-sm">
        <p><strong>Resumo</strong></p>
        <p>Valor do contrato: R$ {contractValue.toLocaleString()}</p>
        <p>Valor da parcela: R$ {parcelValue.toLocaleString()}</p>
        <p>Tipo de cálculo: {rule.calculationType}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-medium mb-2">Detalhamento</h4>

        {result.breakdown && result.breakdown.length > 0 ? (
          <div className="space-y-2">
            {result.breakdown.map((b, idx) => (
              <div key={idx} className="p-3 bg-white border rounded">
                <div className="text-sm text-gray-600">
                  Faixa: {b.min} {b.max ? `- ${b.max}` : "+∞"}
                </div>
                <div>Base nesta faixa: {Number((b.baseInBracket || 0)).toLocaleString()}</div>
                <div>
                  Comissão nesta faixa: R$ {Number((b.partCommission || 0)).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
            ))}
            <div className="p-3 bg-white border rounded">
              <strong>Total da comissão: R$ {Number(result.total || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-white border rounded">
            {result.reason ? <div className="text-sm text-red-600">Nota: {result.reason}</div> : <div className="text-sm text-gray-600">Sem detalhes (regra simples ou sem faixas configuradas).</div>}
            <div className="mt-2"><strong>Total da comissão: R$ {Number(result.total || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong></div>
          </div>
        )}
      </div>
    </Section>
  );
}

// -------------------- Actions --------------------
export function RuleActions({ onSave }) {
  return (
    <div className="flex justify-end gap-3 mt-4">
      <Button variant="secondary">Cancelar</Button>
      <Button variant="primary" onClick={onSave}>Salvar Regra</Button>
    </div>
  );
}
