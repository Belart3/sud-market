export type LegalPolicyContent = {
    intro: string[];
    points: string[];
};

export type LegalPolicy = {
    id: number;
    trigger: string;
    content: LegalPolicyContent;
};

type LegalPoliciesResponse = {
    legalPolicies: LegalPolicy[];
};

const LEGAL_POLICIES_API_URL =
    'https://api.npoint.io/13f4672c39391a5d04f3';

export async function getLegalPolicies(): Promise<LegalPolicy[]> {
    const response = await fetch(LEGAL_POLICIES_API_URL, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(
            `Failed to fetch legal policies: ${response.status}`
        );
    }

    const data: LegalPoliciesResponse = await response.json();

    if (!Array.isArray(data.legalPolicies)) {
        throw new Error('Invalid legal policy data received');
    }

    return data.legalPolicies;
}