import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Calculator, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  typeTravaux: string;
  surface: string;
  nbPieces: string;
  localisation: string;
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  urgence: string;
  description: string;
}



export default function DevisModal({ isOpen, onClose }: DevisModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    typeTravaux: '',
    surface: '',
    nbPieces: '',
    localisation: '',
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    urgence: 'normal',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    
    // Préparer le message WhatsApp avec formatage correct
    const messageWhatsApp = encodeURIComponent(
      `Bonjour DICKO,\n\n` +
      `Je souhaite obtenir un devis pour des travaux de *${formData.typeTravaux.toUpperCase()}*.\n\n` +
      `📋 *Détails du projet :*\n` +
      `• Type : ${formData.typeTravaux}\n` +
      `• Surface : ${formData.surface} m²\n` +
      `• Nombre de pièces : ${formData.nbPieces}\n` +
      `• Localisation : ${formData.localisation}\n` +
      `• Urgence : ${formData.urgence}\n\n` +
      `👤 *Coordonnées :*\n` +
      `• Nom : ${formData.nom}\n` +
      `• Entreprise : ${formData.entreprise || 'Particulier'}\n` +
      `• Email : ${formData.email}\n` +
      `• Téléphone : ${formData.telephone}\n\n` +
      `📝 *Description :*\n${formData.description || 'Aucune description supplémentaire'}\n\n` +
      `Merci de me recontacter pour établir un devis personnalisé.`
    );
    
    // Ouvrir WhatsApp
    window.open(`https://wa.me/33615035300?text=${messageWhatsApp}`, '_blank');
    
    // Envoyer l'email
    const subject = encodeURIComponent(`Demande de devis - ${formData.typeTravaux.toUpperCase()} - ${formData.nom}`);
    const body = encodeURIComponent(
      `Bonjour DICKO,\n\n` +
      `Je souhaite obtenir un devis pour des travaux de ${formData.typeTravaux.toUpperCase()}.\n\n` +
      `DÉTAILS DU PROJET :\n` +
      `• Type de travaux : ${formData.typeTravaux}\n` +
      `• Surface : ${formData.surface} m²\n` +
      `• Nombre de pièces : ${formData.nbPieces}\n` +
      `• Localisation : ${formData.localisation}\n` +
      `• Niveau d'urgence : ${formData.urgence}\n\n` +
      `COORDONNÉES :\n` +
      `• Nom : ${formData.nom}\n` +
      `• Entreprise : ${formData.entreprise || 'Particulier'}\n` +
      `• Email : ${formData.email}\n` +
      `• Téléphone : ${formData.telephone}\n\n` +
      `DESCRIPTION :\n${formData.description || 'Aucune description supplémentaire'}\n\n` +
      `Merci de me recontacter pour établir un devis personnalisé.\n\n` +
      `Cordialement,\n${formData.nom}`
    );
    
    setTimeout(() => {
      window.open(`mailto:contact@dicko-pvc.fr?subject=${subject}&body=${body}`, '_blank');
    }, 1000);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.typeTravaux && formData.surface && formData.nbPieces;
      case 2:
        return formData.localisation && formData.urgence;
      case 3:
        return formData.nom && formData.email && formData.telephone;
      case 4:
        return true;
      default:
        return true;
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({
      typeTravaux: '',
      surface: '',
      nbPieces: '',
      localisation: '',
      nom: '',
      entreprise: '',
      email: '',
      telephone: '',
      urgence: 'normal',
      description: '',
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={resetAndClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#0a0f14] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d6a527] rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-[#0a0f14]" />
            </div>
            <div>
              <h2 className="text-white font-bold font-['Chakra_Petch']">Demande de devis</h2>
              <p className="text-gray-400 text-xs">Étape {step} sur 5</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-100 h-1">
          <motion.div
            className="h-full bg-[#d6a527]"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-[#3db75d]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#3db75d]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a0f14] mb-2 font-['Chakra_Petch']">
                  Merci beaucoup !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre demande de devis a été transmise. Notre équipe vous recontactera sous 24h ouvrées pour étudier votre projet.
                </p>
                <div className="bg-[#d6a527]/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600">Un récapitulatif a été envoyé à</p>
                  <p className="text-lg font-semibold text-[#0a0f14]">{formData.email}</p>
                </div>
                <Button
                  onClick={resetAndClose}
                  className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14]"
                >
                  Fermer
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Type de travaux */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Type de travaux *
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'plomberie', label: 'Plomberie', icon: '💧' },
                          { value: 'chauffage', label: 'Chauffage', icon: '🔥' },
                          { value: 'vmc', label: 'VMC', icon: '💨' },
                          { value: 'gaz', label: 'Réseau Gaz', icon: '⛽' },
                          { value: 'cvc', label: 'CVC Complet', icon: '🏗️' },
                          { value: 'autre', label: 'Autre', icon: '🔧' },
                        ].map((type) => (
                          <button
                            key={type.value}
                            onClick={() => updateField('typeTravaux', type.value)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              formData.typeTravaux === type.value
                                ? 'border-[#d6a527] bg-[#d6a527]/10'
                                : 'border-gray-200 hover:border-[#d6a527]/50'
                            }`}
                          >
                            <span className="text-2xl mb-2 block">{type.icon}</span>
                            <span className="font-medium text-[#0a0f14]">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Surface du chantier (m²) *
                      </Label>
                      <Select
                        value={formData.surface}
                        onValueChange={(value) => updateField('surface', value)}
                      >
                        <SelectTrigger className="bg-white border-gray-300 text-[#0a0f14] [&>span]:text-[#0a0f14]">
                          <SelectValue placeholder="Sélectionnez la surface" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="0-50" className="text-[#0a0f14] cursor-pointer">Moins de 50 m²</SelectItem>
                          <SelectItem value="50-100" className="text-[#0a0f14] cursor-pointer">50 - 100 m²</SelectItem>
                          <SelectItem value="100-200" className="text-[#0a0f14] cursor-pointer">100 - 200 m²</SelectItem>
                          <SelectItem value="200-500" className="text-[#0a0f14] cursor-pointer">200 - 500 m²</SelectItem>
                          <SelectItem value="500+" className="text-[#0a0f14] cursor-pointer">Plus de 500 m²</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Nombre de pièces *
                      </Label>
                      <Select
                        value={formData.nbPieces}
                        onValueChange={(value) => updateField('nbPieces', value)}
                      >
                        <SelectTrigger className="bg-gray-50 border-gray-300 text-[#0a0f14]">
                          <SelectValue placeholder="Sélectionnez" className="text-[#0a0f14]" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="1-2" className="text-[#0a0f14]">1 - 2 pièces</SelectItem>
                          <SelectItem value="3-5" className="text-[#0a0f14]">3 - 5 pièces</SelectItem>
                          <SelectItem value="6-10" className="text-[#0a0f14]">6 - 10 pièces</SelectItem>
                          <SelectItem value="10+" className="text-[#0a0f14]">Plus de 10 pièces</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Localisation et urgence */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Localisation du chantier *
                      </Label>
                      <Input
                        placeholder="Ex: Paris 19, 75019"
                        value={formData.localisation}
                        onChange={(e) => updateField('localisation', e.target.value)}
                        className="bg-white border-gray-300 placeholder:text-gray-500"
                        style={{ color: '#0a0f14' }}
                      />
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Niveau d'urgence *
                      </Label>
                      <div className="space-y-3">
                        {[
                          { value: 'normal', label: 'Normal', desc: 'Délai standard', color: 'bg-green-100 border-green-300' },
                          { value: 'rapide', label: 'Rapide', desc: 'Intervention prioritaire', color: 'bg-yellow-100 border-yellow-300' },
                          { value: 'urgence', label: 'Urgence', desc: 'Intervention express', color: 'bg-red-100 border-red-300' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('urgence', option.value)}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                              formData.urgence === option.value
                                ? 'border-[#d6a527] bg-[#d6a527]/10'
                                : option.color
                            }`}
                          >
                            <span className="font-semibold text-[#0a0f14]">{option.label}</span>
                            <span className="text-sm text-gray-600 block">{option.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Coordonnées */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Nom complet *
                      </Label>
                      <Input
                        placeholder="Ex: Jean Dupont"
                        value={formData.nom}
                        onChange={(e) => updateField('nom', e.target.value)}
                        className="bg-white border-gray-300 placeholder:text-gray-500"
                        style={{ color: '#0a0f14' }}
                      />
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Nom de l'entreprise
                      </Label>
                      <Input
                        placeholder="Ex: Ma Société (optionnel)"
                        value={formData.entreprise}
                        onChange={(e) => updateField('entreprise', e.target.value)}
                        className="bg-white border-gray-300 placeholder:text-gray-500"
                        style={{ color: '#0a0f14' }}
                      />
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Email *
                      </Label>
                      <Input
                        type="email"
                        placeholder="Ex: jean.dupont@email.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="bg-white border-gray-300 placeholder:text-gray-500"
                        style={{ color: '#0a0f14' }}
                      />
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Téléphone *
                      </Label>
                      <Input
                        type="tel"
                        placeholder="Ex: 06 12 34 56 78"
                        value={formData.telephone}
                        onChange={(e) => updateField('telephone', e.target.value)}
                        className="bg-white border-gray-300 placeholder:text-gray-500"
                        style={{ color: '#0a0f14' }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Description */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-[#0a0f14] mb-3">Récapitulatif</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div><span className="text-gray-500">Type:</span> <span className="text-[#0a0f14] capitalize">{formData.typeTravaux}</span></div>
                        <div><span className="text-gray-500">Surface:</span> <span className="text-[#0a0f14]">{formData.surface} m²</span></div>
                        <div><span className="text-gray-500">Pièces:</span> <span className="text-[#0a0f14]">{formData.nbPieces}</span></div>
                        <div><span className="text-gray-500">Urgence:</span> <span className="text-[#0a0f14] capitalize">{formData.urgence}</span></div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-[#0a0f14] font-semibold mb-3 block">
                        Description du projet (optionnel)
                      </Label>
                      <textarea
                        placeholder="Décrivez votre projet, vos contraintes spécifiques, les accès au chantier..."
                        value={formData.description}
                        onChange={(e) => updateField('description', e.target.value)}
                        rows={4}
                        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-[#0a0f14] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d6a527]/50 resize-none"
                        style={{ color: '#0a0f14' }}
                      />
                    </div>

                    <div className="bg-[#d6a527]/10 rounded-xl p-4">
                      <p className="text-sm text-gray-600">
                        En cliquant sur "Obtenir mon devis", vous serez redirigé vers WhatsApp et un email sera préparé avec vos informations.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Confirmation avant envoi */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-[#d6a527]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#d6a527]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0a0f14] mb-2 font-['Chakra_Petch']">
                      Merci beaucoup !
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Votre demande est prête à être envoyée. Nous vous recontacterons sous 48h ouvrées.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-[#0a0f14] mb-3 text-left">Récapitulatif</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-left">
                        <div><span className="text-gray-500">Type:</span> <span className="text-[#0a0f14] capitalize">{formData.typeTravaux}</span></div>
                        <div><span className="text-gray-500">Surface:</span> <span className="text-[#0a0f14]">{formData.surface} m²</span></div>
                        <div><span className="text-gray-500">Pièces:</span> <span className="text-[#0a0f14]">{formData.nbPieces}</span></div>
                        <div><span className="text-gray-500">Urgence:</span> <span className="text-[#0a0f14] capitalize">{formData.urgence}</span></div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600 justify-center">
                        <Phone className="w-5 h-5 text-[#d6a527]" />
                        <span>Votre demande sera envoyée par WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 justify-center">
                        <Mail className="w-5 h-5 text-[#d6a527]" />
                        <span>Un email sera également préparé</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Footer buttons */}
        {!isSubmitted && (
          <div className="border-t border-gray-200 p-6 flex justify-between">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-gray-300 text-gray-600"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] disabled:opacity-50"
              >
                Continuer
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-[#3db75d] hover:bg-[#2ea34d] text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Envoyer ma demande
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
