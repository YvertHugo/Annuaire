package com.example.Annuaire.Entity;

import jakarta.persistence.*;

@Entity
public class Salarie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String tel;
    private String email;

    @ManyToOne
    private Fonction fonction;

    @ManyToOne
    private Site site;


    // CONSTRUCTEURS

    public Salarie() {}

    public Salarie(Long id, String prenom, String nom, String tel, String email, Fonction fonction, Site site) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.tel = tel;
        this.email = email;
        this.fonction = fonction;
        this.site = site;
    }


    // GETTERS ET SETTERS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Fonction getFonction() {
        return fonction;
    }

    public void setFonction(Fonction fonction) {
        this.fonction = fonction;
    }

    public Site getSite() {
        return site;
    }

    public void setSite(Site site) {
        this.site = site;
    }
}
