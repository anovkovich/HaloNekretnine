"use client";

import React, { useState } from "react";
import { Heart, Check, Send, Users, MessageSquare, User } from "lucide-react";

interface RSVPFormProps {
  formUrl: string;
}

export const RSVPForm: React.FC<RSVPFormProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attending: "da",
    plusOnes: "1",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto">
        <div
          className="relative text-center py-16 px-8 overflow-hidden"
          style={{
            background: `linear-gradient(to bottom, var(--theme-background), var(--theme-surface))`,
            borderRadius: "var(--theme-radius)",
            border: "1px solid var(--theme-border)",
            boxShadow: "var(--theme-shadow)",
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-10 left-10 w-32 h-32 rounded-full"
              style={{ border: "1px solid var(--theme-primary)" }}
            />
            <div
              className="absolute bottom-10 right-10 w-24 h-24 rounded-full"
              style={{ border: "1px solid var(--theme-primary)" }}
            />
          </div>

          {/* Success icon */}
          <div className="relative mb-8">
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, var(--theme-primary-muted), transparent)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                <Check size={28} className="text-white" strokeWidth={3} />
              </div>
            </div>
          </div>

          <h3
            className="text-5xl font-script mb-4"
            style={{ color: "var(--theme-primary)" }}
          >
            Hvala vam!
          </h3>
          <p
            className="font-serif text-lg leading-relaxed mb-2"
            style={{ color: "var(--theme-text-muted)" }}
          >
            Vaš odgovor je uspešno zabeležen.
          </p>
          <p
            className="font-light"
            style={{ color: "var(--theme-text-light)" }}
          >
            Radujemo se što ćemo ovaj poseban dan podeliti sa vama.
          </p>

          <div
            className="flex items-center justify-center gap-3 mt-8"
            style={{ color: "var(--theme-primary)", opacity: 0.6 }}
          >
            <div className="w-8 h-px bg-current"></div>
            <Heart size={16} fill="currentColor" />
            <div className="w-8 h-px bg-current"></div>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-xs uppercase tracking-[0.2em] transition-colors"
            style={{ color: "var(--theme-text-light)" }}
          >
            Pošalji novi odgovor
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div
        className="relative p-8 sm:p-12 overflow-hidden"
        style={{
          backgroundColor: "var(--theme-background)",
          borderRadius: "var(--theme-radius)",
          boxShadow: "var(--theme-shadow)",
          border: "1px solid var(--theme-border-light)",
        }}
      >
        {/* Decorative corners */}
        <div
          className="hidden md:block absolute top-6 left-6 w-12 h-12"
          style={{
            borderTop: "2px solid var(--theme-border)",
            borderLeft: "2px solid var(--theme-border)",
            borderRadius: "var(--theme-radius) 0 0 0",
          }}
        />
        <div
          className="hidden md:block absolute top-6 right-6 w-12 h-12"
          style={{
            borderTop: "2px solid var(--theme-border)",
            borderRight: "2px solid var(--theme-border)",
            borderRadius: "0 var(--theme-radius) 0 0",
          }}
        />
        <div
          className="hidden md:block absolute bottom-6 left-6 w-12 h-12"
          style={{
            borderBottom: "2px solid var(--theme-border)",
            borderLeft: "2px solid var(--theme-border)",
            borderRadius: "0 0 0 var(--theme-radius)",
          }}
        />
        <div
          className="hidden md:block absolute bottom-6 right-6 w-12 h-12"
          style={{
            borderBottom: "2px solid var(--theme-border)",
            borderRight: "2px solid var(--theme-border)",
            borderRadius: "0 0 var(--theme-radius) 0",
          }}
        />

        <form onSubmit={handleSubmit} className="relative space-y-8">
          {/* Name field */}
          <div className="group">
            <label
              className="flex items-center gap-2 text-xs font-elegant uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--theme-text-light)" }}
            >
              <User size={14} />
              Ime i prezime
            </label>
            <input
              required
              type="text"
              className="w-full bg-transparent py-3 text-lg font-serif placeholder:opacity-30 outline-none transition-colors duration-300"
              style={{
                color: "var(--theme-text)",
                borderBottom: "2px solid var(--theme-border-light)",
              }}
              placeholder="Vaše ime"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onFocus={(e) =>
                (e.target.style.borderBottomColor = "var(--theme-primary)")
              }
              onBlur={(e) =>
                (e.target.style.borderBottomColor = "var(--theme-border-light)")
              }
            />
          </div>

          {/* Attendance field */}
          <div>
            <label
              className="flex items-center gap-2 text-xs font-elegant uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--theme-text-light)" }}
            >
              <Heart size={14} />
              Da li dolazite?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "da",
                  label: "Dolazim",
                  sublabel: "Sa radošću!",
                  icon: Check,
                },
                {
                  value: "ne",
                  label: "Nažalost ne",
                  sublabel: "Sve najlepše!",
                  icon: Heart,
                },
              ].map((option) => (
                <label
                  key={option.value}
                  className="relative flex flex-col items-center justify-center py-4 px-2 cursor-pointer transition-all duration-300"
                  style={{
                    borderRadius: "var(--theme-radius)",
                    border:
                      formData.attending === option.value
                        ? "2px solid var(--theme-primary)"
                        : "2px solid var(--theme-border-light)",
                    backgroundColor:
                      formData.attending === option.value
                        ? "var(--theme-primary-muted)"
                        : "transparent",
                    boxShadow:
                      formData.attending === option.value
                        ? "var(--theme-shadow)"
                        : "none",
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    className="hidden"
                    checked={formData.attending === option.value}
                    onChange={() =>
                      setFormData({ ...formData, attending: option.value })
                    }
                  />
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors"
                    style={{
                      backgroundColor:
                        formData.attending === option.value
                          ? "var(--theme-primary)"
                          : "var(--theme-surface)",
                      color:
                        formData.attending === option.value
                          ? "white"
                          : "var(--theme-text-light)",
                    }}
                  >
                    <option.icon size={20} />
                  </div>
                  <span
                    className="font-serif text-lg"
                    style={{
                      color:
                        formData.attending === option.value
                          ? "var(--theme-primary)"
                          : "var(--theme-text-muted)",
                    }}
                  >
                    {option.label}
                  </span>
                  <span
                    className="text-xs mt-1"
                    style={{ color: "var(--theme-text-light)" }}
                  >
                    {option.sublabel}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Plus ones field */}
          {formData.attending === "da" && (
            <div className="animate-fade-in-up">
              <label
                className="flex items-center gap-2 text-xs font-elegant uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--theme-text-light)" }}
              >
                <Users size={14} />
                Broj osoba (uključujući Vas)
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      plusOnes: Math.max(
                        1,
                        parseInt(formData.plusOnes) - 1,
                      ).toString(),
                    })
                  }
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: "2px solid var(--theme-border-light)",
                    color: "var(--theme-text-light)",
                  }}
                >
                  −
                </button>
                <span
                  className="text-4xl font-elegant w-16 text-center"
                  style={{ color: "var(--theme-text)" }}
                >
                  {formData.plusOnes}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      plusOnes: (parseInt(formData.plusOnes) + 1).toString(),
                    })
                  }
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    border: "2px solid var(--theme-border-light)",
                    color: "var(--theme-text-light)",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Notes field */}
          {formData.attending === "da" && (
            <div>
              <label
                className="flex items-center gap-2 text-xs font-elegant uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--theme-text-light)" }}
              >
                <MessageSquare size={14} />
                Dodatne napomene
              </label>
              <textarea
                className="w-full p-4 h-25 md:h-15 font-light outline-none transition-all duration-300 resize-none"
                style={{
                  backgroundColor: "var(--theme-surface)",
                  color: "var(--theme-text-muted)",
                  borderRadius: "var(--theme-radius)",
                  border: "2px solid transparent",
                }}
                placeholder="Alergije, posebni zahtevi, poruka mladencima..."
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--theme-border)";
                  e.target.style.backgroundColor = "var(--theme-background)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "transparent";
                  e.target.style.backgroundColor = "var(--theme-surface)";
                }}
              />
            </div>
          )}

          {/* Submit button */}
          <button
            disabled={loading}
            type="submit"
            className="relative w-full py-5 uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden text-white"
            style={{
              borderRadius: "var(--theme-radius)",
              backgroundColor: loading
                ? "var(--theme-text-light)"
                : "var(--theme-text)",
              boxShadow: loading ? "none" : "var(--theme-shadow)",
            }}
          >
            {loading ? (
              <>
                <div
                  className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                  style={{
                    borderColor: "var(--theme-text-light)",
                    borderTopColor: "transparent",
                  }}
                />
                Šaljem...
              </>
            ) : (
              <>
                <Send size={18} />
                Potvrdi dolazak
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
