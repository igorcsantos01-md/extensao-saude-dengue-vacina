import React from 'react';

/**
 * 1. Logotipo "Editora Mente e Saúde" — Extraído fielmente do certificado oficial em alta resolução
 */
export const LogoEditoraMenteSaude: React.FC<{ className?: string }> = ({
  className = 'w-14 h-14',
}) => (
  <img
    src="/assets/cert/logo-ems.png"
    alt="Logotipo Editora Mente e Saúde"
    className={`object-contain select-none ${className}`}
    draggable={false}
  />
);

/**
 * 2. Logotipo "Centro Profissionalizante Maria Dalva de Araújo" — Extraído fielmente (sem telefones e sem cantoneiras)
 */
export const LogoCentroMariaDalva: React.FC<{ className?: string }> = ({
  className = 'w-14 h-14',
}) => (
  <img
    src="/assets/cert/logo-cmda.png"
    alt="Logotipo Centro Profissionalizante Maria Dalva de Araújo"
    className={`object-contain select-none ${className}`}
    draggable={false}
  />
);

/**
 * 3. Assinatura 1 — Bárbara Lima dos Santos — Extraída fielmente dos certificados oficiais em fundo transparente
 */
export const SignatureBarbaraSvg: React.FC<{ className?: string }> = ({
  className = 'w-44 h-11',
}) => (
  <img
    src="/assets/cert/sig-barbara.png"
    alt="Assinatura de Bárbara Lima dos Santos"
    className={`object-contain select-none ${className}`}
    draggable={false}
  />
);

/**
 * 4. Assinatura 2 — James Araújo de Santana — Extraída fielmente dos certificados oficiais em fundo transparente
 */
export const SignatureJamesSvg: React.FC<{ className?: string }> = ({
  className = 'w-44 h-11',
}) => (
  <img
    src="/assets/cert/sig-james.png"
    alt="Assinatura de James Araújo de Santana"
    className={`object-contain select-none ${className}`}
    draggable={false}
  />
);

/**
 * 5. Selo Oficial de Fé Pública (Idêntico ao selo dourado dos Certificados 03 e 04)
 */
export const SeloFePublicaSvg: React.FC<{
  code: string;
  className?: string;
}> = ({ code, className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Selo Oficial de Fé Pública"
  >
    <circle
      cx="60"
      cy="60"
      r="55"
      fill="#FDFBF3"
      stroke="#C59B27"
      strokeWidth="2.2"
    />
    <circle
      cx="60"
      cy="60"
      r="49"
      fill="#FAF3DD"
      stroke="#C59B27"
      strokeWidth="1.2"
      strokeDasharray="3 2"
    />
    <circle
      cx="60"
      cy="60"
      r="42"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="0.9"
    />

    <text
      x="60"
      y="31"
      textAnchor="middle"
      fill="#B48A1E"
      fontSize="8"
      fontWeight="700"
      letterSpacing="3"
    >
      ★ ★ ★
    </text>

    <text
      x="60"
      y="47"
      textAnchor="middle"
      fill="#855E09"
      fontSize="8.3"
      fontWeight="700"
      fontFamily="Cinzel, Georgia, serif"
      letterSpacing="0.6"
    >
      SELO OFICIAL
    </text>
    <text
      x="60"
      y="59.5"
      textAnchor="middle"
      fill="#714E05"
      fontSize="8"
      fontWeight="700"
      fontFamily="Cinzel, Georgia, serif"
      letterSpacing="0.6"
    >
      FÉ PÚBLICA
    </text>

    <line
      x1="28"
      y1="66"
      x2="92"
      y2="66"
      stroke="#C59B27"
      strokeWidth="0.9"
    />

    <text
      x="60"
      y="76"
      textAnchor="middle"
      fill="#855E09"
      fontSize="5.8"
      fontWeight="700"
      fontFamily="JetBrains Mono, monospace"
    >
      {code}
    </text>

    <text
      x="60"
      y="92"
      textAnchor="middle"
      fill="#B48A1E"
      fontSize="7.5"
      fontWeight="700"
      letterSpacing="3"
    >
      ★ ★ ★
    </text>
  </svg>
);
